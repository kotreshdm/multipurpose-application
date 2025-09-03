import express from "express";
import mongoose from "mongoose";
import config from "../config.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

app.get("/api/health", (req, res) => {
  const dbState = mongoose.connection.readyState === 1 ? "up" : "down";
  res.json({
    status: "ok",
    db: dbState,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

const PORT = config.port;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
