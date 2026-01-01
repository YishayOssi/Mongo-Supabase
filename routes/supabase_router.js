import express from "express";
import { registerUser } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/auth.js";

export const supabaseRouter = express.Router();


supabaseRouter.post("/register", registerUser);









export const messageRouter = express.Router();


messageRouter.post("/messages", authMiddleware, (req, res) => {
    res.json({ message: `Hello ${req.user.username}, you are authorized!` });
});