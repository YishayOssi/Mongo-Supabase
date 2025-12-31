import { supabase } from "../db/supabase/supabase.js";

export const createUser = async (username, password) => {
    // הכנסת משתמש לטבלת users [cite: 29, 52]
    const { data, error } = await supabase
        .from('users')
        .insert([{ username, password }]); // סיסמה בטקסט פשוט לפי הדרישה [cite: 33]

    if (error) throw error;
    return data;
};