import { findUserByCredentials } from "../dal/user_dal.js";

export const authMiddleware = async (req, res, next) => {
    try {
 
        const username = req.headers['x-username'];
        const password = req.headers['x-password'];

        if (!username || !password) {
            return res.status(401).json({ error: "Authentication required (username and password)" });
        }

   
        const user = await findUserByCredentials(username, password);

        if (!user) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

       
        req.user = user;
        
 
        next();
    } catch (error) {
        res.status(500).json({ error: "Server error during authentication" });
    }
};