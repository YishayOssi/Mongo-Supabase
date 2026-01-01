import { createUser } from "../dal/user_dal.js";

export const register = async (username, password) => {
    // וולידציה לפי הדרישות [cite: 51]
    if (!username || !password) {
        throw new Error("Username and password are required");
    }
    return await createUser(username, password);
};