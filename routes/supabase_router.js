import express from "express";
import { registerUser } from "../controllers/userController.js";

export const supabaseRouter = express.Router();

supabaseRouter.post("/register", registerUser);

