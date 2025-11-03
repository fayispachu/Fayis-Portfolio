import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

async function testSMTP() {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();
    console.log("✅ SMTP connection verified successfully!");
  } catch (err) {
    console.error("❌ SMTP test failed:", err.message);
  }
}

testSMTP();
