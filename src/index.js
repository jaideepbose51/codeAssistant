import express from "express";
import morgan from "morgan";
import {dbconnect} from "./config/index.js";
import userRouter from "./routes/user.js";
import chatRouter from "./routes/chat.js";

// dotenv configuration 
import dotenv  from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT; // USE PORT NO
dbconnect();

app.use(express.json());
app.use(morgan());

app.use("/user", userRouter);
app.use("/chat",chatRouter);


app.listen(port,(err)=>{
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
})