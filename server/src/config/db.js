import mongoose from "mongoose";
import config from "../../config.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.dbUri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ DB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
