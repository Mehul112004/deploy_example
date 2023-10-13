import express from "express";
import "dotenv/config"

const app=express();
const port=process.env.PORT;
console.log(port)
app.get("/",(req,res)=>{
    res.send(`<a href="/twitter" >Go to Twitter</a>`)
    console.log(req)
})

app.get("/twitter",(req,res)=>{
    res.send("You are using Twitter RN!")
})

app.get("/login",(req,res)=>{
    res.send("This is the Login")
})
app.listen(port,()=>{
    if (console.error()) {
        throw err;
    }
    console.log("The server is running on http://localhost:3000")
})