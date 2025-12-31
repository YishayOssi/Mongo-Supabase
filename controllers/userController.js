import * as userService from "../services/userService.js";

export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        await userService.register(username, password);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};