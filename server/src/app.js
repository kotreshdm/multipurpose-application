import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Example route
app.get("/api/health", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

export default app;
