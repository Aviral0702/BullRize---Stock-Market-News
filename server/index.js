import express from 'express';
import dotenv from "dotenv";
import { app } from "./app.js"
dotenv.config({
    path: "./.env"
});


const apikey = process.env.API_KEY;
const apiStock = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NELCO.BSE&outputsize=full&apikey=${apikey}`;
app.post("/stock", async(req,res)=>{
    try {
        const response = await fetch(apiStock)
        const data = await response.json();
        if(data){
            res.status(200).json(data);
        }
        else{
            res.status(404).json({message: "Data not found"});
        }

    } catch (error) {
        console.log("Something went wrong",error);
        res.status(404);
    }   
    
})

app.get("/",(req,res)=>{
    res.send("Hello to the new project");
})

app.post("/signin",(req,res)=>{
    
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})