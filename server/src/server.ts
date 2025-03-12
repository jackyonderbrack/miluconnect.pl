import express from "express";
import http from "http";
import Logging from "./library/Logging";
import dotenv from "dotenv";
import path from "path";
import { sequelize } from "./config/database.config";
import sendEmailRoute from "./routes/email.route";
import { userRouter } from "./routes/user.route";
import { loginRouter } from "./routes/login.route";
import cors from "cors";
import { postRouter } from "./routes/post.route";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const API_SUFFIX = process.env.API_SUFFIX || "/admin-panel/api";

const StartServer = () => {
  // Log incoming requests
  app.use((req, res, next) => {
    Logging.info(`Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on("finish", () => {
      Logging.info(
        `Response -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
      );
    });

    next();
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  // Serve static React files
  app.use(express.static(path.join(__dirname, "../../client/dist")));

  // Serve sitemap.xml and robots.txt
  app.get("/sitemap.xml", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist/sitemap.xml"));
  });

  app.get("/robots.txt", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist/robots.txt"));
  });

  // API routes
  app.use(API_SUFFIX, sendEmailRoute);
  app.use(API_SUFFIX, userRouter);
  app.use(API_SUFFIX, loginRouter);
  app.use(API_SUFFIX, postRouter);

  // Handle errors for unknown API routes
  app.use(API_SUFFIX, (req, res) => {
    const error = new Error("Not found anything");
    Logging.error(error.message);
    return res.status(404).json({ message: error.message });
  });

  // Handle React Router (SPA) - serve index.html for all other routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
  });

  // Start the server
  http.createServer(app).listen(PORT, () => Logging.info(`Server is running on port: ${PORT}`));
};

// Start the server after connecting to the database
sequelize
  .sync({ alter: true })
  .then(() => {
    StartServer();
  })
  .catch((error) => {
    Logging.error(`Failed to connect to the database: ${error.message}`);
  });
