import { register } from "../services/userService.js";

export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        await register(username, password);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};