import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import connectionDB from './config/db.js'

//config env
dotenv.config();

//database config
connectionDB();

//rest object
const app=express();

//middleware
app.use(express.json())
app.use(morgan('dev'))

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
