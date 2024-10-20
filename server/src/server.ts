import express from "express";
import http from "http";
import Logging from "./library/Logging";
import dotenv from "dotenv";
import path from "path";
import { sequelize } from "./config/database.config";
import sendEmailRoute from "./routes/email.route";
import { userRouter } from "./routes/user.route";
import { loginRouter } from "./routes/login.route";
import cors from "cors"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || "/admin-panel/api";

const StartServer = () => {
	// Logowanie przychodzących żądań
	app.use((req, res, next) => {
		Logging.info(`Incoming -> Method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

		res.on("finish", () => {
			Logging.info(
				`Incoming -> Method: [${req.method}] - url: [${req.url}] - IP: [${req.socket.remoteAddress}] - status [${res.statusCode}]`
			);
		});

		next();
	});

	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(cors())

	// Serwowanie plików statycznych React
	app.use(express.static(path.join(__dirname, "../../client/dist")));

	// Dodanie tras API
	app.use(API_URL, sendEmailRoute);
	app.use(API_URL, userRouter);
	app.use(API_URL, loginRouter);

	// Obsługa błędów dla nieznanych tras API
	app.use(API_URL, (req, res) => {
		const error = new Error("Not found anything");
		Logging.error(error.message);
		return res.status(404).json({ message: error.message });
	});

	// Dla każdej innej ścieżki, zwróć index.html (dla React Router)
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
	});

	// Uruchomienie serwera
	http.createServer(app).listen(PORT, () => Logging.info(`Serwer działa na porcie: ${PORT}`));
};

// Rozpoczęcie działania serwera po połączeniu z bazą danych
sequelize
	.sync({ alter: true })
	.then(() => {
		StartServer();
	})
	.catch((error) => {
		Logging.error(`Nie udało się połączyć z bazą: ${error.message}`);
	});
