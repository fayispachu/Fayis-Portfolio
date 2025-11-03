import Email from "../models/email.models.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendEmail = async (req, res) => {
  const { name, email, text } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Recipient email is required" });
  }

  try {
    // Save message to MongoDB
    const newMessage = new Email({ name, email, text });
    await newMessage.save();

    // Configure Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Define email
    const mailOptions = {
      from: `"${name}" <fayizpachu217@gmail.com>`, // ✅ must be a verified sender
      to: process.env.MY_EMAIL, // where you receive messages
      replyTo: email,
      subject: `📩 New message from ${name || "Unknown"}`,
      text: `
Name: ${name || "N/A"}
Email: ${email}

Message:
${text}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "✅ Email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
};
