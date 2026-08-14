import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import employeeRoutes from "./routes/employeeRoutes.js";

dotenv.config();

const app = express();
connectDB();

app.use(
  cors({
    origin: ["https://staff-spheree.vercel.app","http://localhost:3000"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Employee Management API is runnning",
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
