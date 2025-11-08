import sendMailer from "../lib/sendMailer.js";
import Email from "../models/email.models.js";

export const sendEmail = async (req, res) => {
  const { name, email, text } = req.body;

  try {
    const newMessage = new Email({ name, email, text });
    await newMessage.save();

    const result = await sendMailer({ name, email, message: text });
    if (!result.success) throw result.error;

    res.status(200).json({ message: "✅ Email sent successfully" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
};
