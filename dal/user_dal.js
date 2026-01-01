import { supabase } from "../db/supabase/supabase.js";

export const createUser = async (username, password) => {
    const { data, error } = await supabase
        .from('users')
        .insert([{ username, password }]); 

    if (error) throw error;
    return data;
};







export const findUserByCredentials = async (username, password) => {
    const { data, error } = await supabase
        .from('users')
        .select('id, username')
        .eq('username', username)
        .eq('password', password) 
        .single();

    if (error || !data) return null;
    return data;
};