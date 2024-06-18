import OpenAI from "openai";
import dotenv from "dotenv";
import userMiddleware from "../middlleware/index.js";
import { Router } from "express";

dotenv.config();


const userConversations = new Map(); // Store conversation history for each user


const router = Router();
router.post("/create",userMiddleware,async(req,res)=>{
    let code  = req.body.prompt;
    console.log(code
    );

    if (code === '/endchat') {
        userConversations.delete(userId);
        return res.json({ message: 'Chat ended.' });
    }

    

    const prompt = [
        "Generate an output for the prompt if it is related to codeing if it is not related to codeing i only respond to codeing prompt",
        `[prompt : ${code}]`,
        "Use previous response if needed",
        `[previous response :${userConversations}]`
    ].join(" ");
    const messages = [
        {
            role: "user",
            content: prompt
        }
    ];

    try {
        const response = await fetchOpenAI(messages);
        const parsedResponse = JSON.parse(response);
        const conversation = userConversations.get(userId) || [];
    conversation.push({
        role: "user",
        content: parsedResponse
    });
        res.json(parsedResponse);
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