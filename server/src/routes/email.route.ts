import express from "express";
import { emailInfo, sendEmail } from "../controllers/email.controller";

const router = express.Router();

router.get("/email-info", emailInfo);
router.post("/send-email", sendEmail);

export default router;
