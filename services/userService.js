import * as userDal from "../dal/user_dal.js"; 

export const register = async (username, password) => {
    if (!username || !password) {
        throw new Error("Username and password are required");
    }
    return await userDal.createUser(username, password);
};