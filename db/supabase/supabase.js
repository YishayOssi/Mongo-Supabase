import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();

export const supabase = createClient(process.env.DATA_API, process.env.SECRET_KEY);





export async function addUser() {
    const { data, error } = await supabase.from('users').insert({ username: "david" }).select()
    if (error) {
        console.log(error);
    }
    console.log(data);
    return data
}

