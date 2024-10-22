import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'

//config env
dotenv.config();

//rest object
const app=express();

//rest api
app.get("/",(req,res)=>
{
    res.send("<h1>Welcome to our site</h1>");
});

//port
const port=process.env.por|| 8080;

app.listen(port,()=>
{
    console.log(`Server running at ${port}`.bgGreen.white);
});
