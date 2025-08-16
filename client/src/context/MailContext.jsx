import { createContext } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
export const MailContext = createContext();
export const MailProvider = ({ children }) => {
  try {
    const sendEmail = async (name, email, text) => {
      try {
        const response = await axiosInstance.post("/mail/send-email", {
          name,
          email,
          text,
        });
        toast.success(response.data.message);
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error("Failed to send email");
      }
    };

    return (
      <MailContext.Provider value={{ sendEmail }}>
        {children}
      </MailContext.Provider>
    );
  } catch (error) {
    console.error("Error sending email:", error);
    toast.error("Failed to send email");
  }
};
