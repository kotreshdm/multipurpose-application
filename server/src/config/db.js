import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI is missing in .env");

    const conn = await mongoose.connect(uri);
    console.log(
      `✅ MongoDB Connected: ${conn.connection.host}:${conn.connection.port}`
    );
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
