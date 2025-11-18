// utils/sendMailer.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendMailer = async ({ name, email, message }) => {
  try {
    // Create transporter using  SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, 
      },
    });

    // Define email content
    const mailOptions = {
      from: `"${name}" <${process.env.MY_EMAIL}>`, // must be your Brevo verified sender
      to: process.env.MY_EMAIL, // where to receive messages
      replyTo: email,
      subject: `📩 New message from ${name || "Unknown"}`,
      text: `
Name: ${name || "N/A"}
Email: ${email}

Message:
${message}
      `,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return { success: true };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return { success: false, error };
  }
};

export default sendMailer;
