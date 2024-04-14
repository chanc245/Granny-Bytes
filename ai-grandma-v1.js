// Base code from youtube https://www.youtube.com/watch?v=Z8F6FvMrN4o 
// Master the Gemini API: A Node.js tutorial with real examples, Google for developer 

// * AI quantum grandma v1 
// * chat bot + img analyzer 

import dotenv from "dotenv";
import readline from "readline";
import * as fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLEAPIKEY);

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function imgAnalyser() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" })

  const prompt = "Based on the image, please judege if this dish is well cooked, what can I do to make this dish better(be as speicifc as you can)"

  const imageParts = [fileToGenerativePart("img/burnt-dish.jpg", "image/jpeg")];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  
  console.log(text);
}

async function chat() {
  console.log("--GEMINI START RUNNING")
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history:[],
    generationConfig: {
      maxOutputTokens: 500,
    },
  })

  async function askAndRespond(){
    rl.question("You: ", async (msg) => {
      if (msg.toLowerCase() === "exit") {
        rl.close()
      } else {
        const result = await chat.sendMessage(msg);
        const response = await result.response;
        const text = await response.text();
        console.log("AI: ", text);
        askAndRespond();
      }
    })

  }

  askAndRespond();
}

// chat()
// imgAnalyser()