import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai"
import * as fs from "fs";

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

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" })

  const prompt = "Based on the image, please judege if this dish is well cooked, what can I do to make this dish better(be as speicifc as you can)"

  const imageParts = [fileToGenerativePart("img/burnt-dish.jpg", "image/jpeg")];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  
  console.log(text);
}

run();