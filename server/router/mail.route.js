import express from "express";
import { sendEmail } from "../controller/mail.controller.js";

const mailRouter = express.Router();

mailRouter.post("/send-email", sendEmail);


export default mailRouter;
// a