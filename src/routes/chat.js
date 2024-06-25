import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

import userMiddleware from "../middlleware/index.js";
import express, { Router } from "express";




const app=express();
app.use(express.json());

let previousResponse = new Array();

const router = Router();
router.post("/create",userMiddleware,async(req,res)=>{
    let code  = req.body.prompt;
    console.log(code);

    if (code.toLowerCase() == "end"){
        previousResponse = [];
        res.status(200);
    }


    const prompt = [
        "Generate a program for the coding prompt ",
        `[prompt : ${code}]`,
        "Use previous response if needed",
        `[previous response :${previousResponse}]`
    ].join(" ");
    
    const messages = [
        {
            role: "user",
            content: prompt
        }
    ];

    try {
        const response = await fetchOpenAI(messages);
        // const parsedResponse = JSON.parse(response);
        console.log(response);
        previousResponse.push(response);
        res.send(response);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
});

const fetchOpenAI = async (messages) => {
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    const openai = new OpenAI({
        apiKey: OPENAI_API_KEY,
    });

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages
        });

        return response.choices[0].message.content;

    } catch (error) {
        console.error("Error fetching data from OpenAI API:", error);
        throw new Error("Error fetching data from OpenAI API.");
    }
}

export default router;