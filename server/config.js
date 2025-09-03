import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
export default {
  port: process.env.PORT || 5000,
  dbUri: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET,
  apiUrl: process.env.REACT_APP_API_URL,
};
