import express from "express";
import http from 'http';
import Logging from "./library/Logging";
import dotenv from "dotenv";
import cors from "cors";
import sendEmailRoute from "./routes/sendEmailRoute";
import { sequelize } from "./config/database.config";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Serwer włączy się tylko, gdy będzie połączenie z bazą
const StartServer = () => {
    app.use((req, res, next) => {
        Logging.info(`Incoming -> Method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            Logging.info(`Incoming -> Method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}] - status [${res.statusCode}]`);
        });

        next();
    });

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(cors({
        origin: 'https://miluconnectballerstest.pl',
        methods: 'GET,POST,PUT,DELETE',
        allowedHeaders: 'Content-Type,Authorization'
    }));

    // Rules of API
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });

    // Healthcheck with /rest prefix
    app.get('/rest/ping', (req, res) => res.status(200).json({ message: `pong na miluconnectballerstest.pl na porcie ${PORT}` }));

    // Dodanie tras
    app.use('/api', sendEmailRoute);

    // Obsługa błędów dla nieznanych tras /rest
    app.use('/api', (req, res, next) => {
        const error = new Error('Not found anything');
        Logging.error(error.message);
        return res.status(404).json({ message: error.message });
    });

    // Uruchomienie serwera
    http.createServer(app).listen(PORT, () => Logging.info(`Serwer działa na porcie: ${PORT}`));
};

sequelize.sync({ alter: true }).then(() => {
    StartServer();
}).catch((error) => {
    Logging.error(`Nie udało się połączyć z bazą: ${error.message}`);
    Logging.error(`Sprawdź np. ustawienia środowiskowe`);
});
