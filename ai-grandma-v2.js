// Gemini Base code from youtube https://www.youtube.com/watch?v=Z8F6FvMrN4o
// Master the Gemini API: A Node.js tutorial with real examples, Google for developer

// * AI quantum grandma v2
// * chat bot + img analyzer + fonrt end terminal(link to HTML)

// node ai-grandma-v2.js
// npm run granny

import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import dotenv from "dotenv";
import readline from "readline";
import * as fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

// ---------- TO FONT END ---------- //
// ---------- TO FONT END ---------- //
// ---------- TO FONT END ---------- //
// ---------- TO FONT END ---------- //
// ---------- TO FONT END ---------- //

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public/welcome.html"));
});

app.post("/submit", async (req, res) => {
  let input = req.body.input;

  try {
    const aiResponse = await getGenResultAsString(input);
    res.json({ ai: aiResponse });
  } catch (error) {
    console.error("Gemini Error:", error);
    res
      .status(500)
      .json({ error: "Failed to generate output. Please try again." });
  }
});

async function getGenResultAsString(input) {
  console.log("--Run Gemini");

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = input;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// ---------- GEMINI ---------- //
// ---------- GEMINI ---------- //
// ---------- GEMINI ---------- //
// ---------- GEMINI ---------- //
// ---------- GEMINI ---------- //

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
});

async function imgAnalyser() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt =
    "Based on the image, please judege if this dish is well cooked, what can I do to make this dish better(be as speicifc as you can)";

  const imageParts = [fileToGenerativePart("img/burnt-dish.jpg", "image/jpeg")];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();

  console.log(text);
}

async function chat() {
  // console.log("--GEMINI START RUNNING")
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 500,
    },
  });

  async function askAndRespond() {
    rl.question("You: ", async (msg) => {
      if (msg.toLowerCase() === "exit") {
        rl.close();
      } else {
        const result = await chat.sendMessage(msg);
        const response = await result.response;
        const text = await response.text();
        console.log("AI: ", text);
        askAndRespond();
      }
    });
  }

  askAndRespond();
}

async function ask(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // const prompt =
  //   "";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}
