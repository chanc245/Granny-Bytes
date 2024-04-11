import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLEAPIKEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = 
    "tell me another pick up line";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();