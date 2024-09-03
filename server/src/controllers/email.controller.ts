import nodemailer from "nodemailer";
import Logging from "../library/Logging";
import { Request, Response } from "express"

export const sendEmail = async (req: Request, res: Response) => {
    let transporter = nodemailer.createTransport({
      host: "s145.cyber-folks.pl",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_EMAIL_PWD,
      },
    });
  
    let mailOptions = {
      from: "kontakt@miluconnect.pl",
      to: "mike.projektowanie@gmail.com",
      subject: `Wiadomość z witryny od: ${req.body.contactFormClientEmail}`,
      text: `Nadawca: ${req.body.contactFormClientName}\nWiadomość: ${req.body.contactFormMessage}`,
    };
  
    try {
      let info = await transporter.sendMail(mailOptions);
      res.send("Email wysłany: " + info.response);
    } catch (sendingError) {
      console.error("Błąd przy wysyłce emaila: ", sendingError);
      res.status(500).send("Błąd serwera przy wysyłce");
    }
  }

export const emailInfo = (_req: Request, res: Response) => {
    try {
      res.status(200).json({ message: "info o e-mail" });
      Logging.warn("GET request: /contact-form/info, sendEmailRoute _10 ");
    } catch (error) {
      console.error("Błąd przy wysyłce emaila: ", error);
      res.status(500).send("Błąd serwera przy wysyłce");
    }
  }