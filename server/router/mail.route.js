import express from "express";
import { sendEmail } from "../controller/mail.controller.js";

const mailRouter = express.Router();

mailRouter.post("/send-email", sendEmail);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
  });
}

export default mailRouter;
