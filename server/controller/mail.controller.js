import Email from "../models/email.models.js";

import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
  const { name, email, text } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Recipient email is required" });
  }
  try {
    const newMessage = new Email({ name, email, text });
    await newMessage.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      replyTo: email,
      subject: `Message from Your Portfolio - ${email}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${text}
      `,
    };
     transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
};
