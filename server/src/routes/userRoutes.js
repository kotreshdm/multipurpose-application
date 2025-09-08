import { Router } from "express";
import registerUser from "../controllers/users/registerUser.js";

const router = Router();

// Register user
router.post("/register", registerUser);
router.get("/profile", registerUser);

export default router;
