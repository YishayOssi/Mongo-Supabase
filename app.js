import express from "express"
import { config } from "dotenv"
import { supabaseRouter } from "./routes/supabase_router.js"

config()
const app  = express()
app.use(express.json())

// create Middleware general
app.use("/", (req, res, next) => {
   console.log(req.method, req.path)
   next()
})


app.use(supabaseRouter)




app.listen(process.env.PORT,()=> {
    console.log(`app listen on http://localhost:${process.env.PORT}`);
})