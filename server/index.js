import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRouter from "./router/mail.route.js";
import { ConnectDataBase } from "./dataBase/db.js";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-app.onrender.com"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

ConnectDataBase();
const PORT = process.env.PORT || 5000;

app.use("/api/mail", mailRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
