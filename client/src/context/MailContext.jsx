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
    toast.success(response.data.message, {
      style: {
        background: "#1f2937",
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: "14px",
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    toast.error(
      error.response?.data?.message || "Failed to send email",
      {
        style: {
          background: "#1f2937",
          color: "#ffffff",
        },
      }
    );
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
