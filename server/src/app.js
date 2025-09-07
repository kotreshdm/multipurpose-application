import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:5173", // your React app
    credentials: true, // allow cookies/headers
  })
);

// Example route
app.get("/api/health", (req, res) => {
  return res.status(401).json({ message: "Unauthorized ❌" });
});

export default app;
