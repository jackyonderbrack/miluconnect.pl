import express from "express";
import Logging from "./library/Logging";
import dotenv from "dotenv";
import cors from "cors";
import sendEmailRoute from "./routes/sendEmailRoute";

dotenv.config();

const app = express();
const _PORT = process.env.SERVERPORT;

app.use(cors());
app.use(express.json());
app.use("/rest/contact-form", sendEmailRoute);

// Healthcheck
app.get("/rest/ping", (_req, res) => res.status(200).json({ message: "pong" }));

// Server listen
app.listen(_PORT, () => Logging.info(`Serwer działa na porcie ${_PORT}`));
