import dotenv from "dotenv";
import readline from "readline";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLEAPIKEY);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function run() {
  console.log("--GEMINI START RUNNING")
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

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

run(); 



