import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Example route
app.get("/api/health", (req, res) => {
  return res.status(401).json({ message: "Unauthorized ❌" });
});
app.use("/api/users", userRoutes);

export default app;
