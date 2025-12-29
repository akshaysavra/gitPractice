import express from "express";
import {config} from "dotenv"
config();

const app = express();
console.log("server",process.env.PORT)
const PORT =  4000 || process.env.PORT ;

app.get("/",(req,res)=>{
    res.send("server is running")
})

app.listen(PORT , ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})

