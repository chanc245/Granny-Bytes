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

const recipes = {
  Taiwan: {
    name: "Braised Pork Belly (焢肉 Kong Rou)",
    ingredients: [
      "Cubed pork belly: 1 lb",
      "Garlic: around 4 pieces",
      "Sugar: 1 Spoon",
      "Green Onion: 2 pieces",
      "Soy Sauce: half a bowl",
      "Water: 3 bowls",
    ],
    steps: [
      "Medium Heat, Fry the pork belly to golden brown (skin first), set it aside",
      "Medium Heat, Fry the garlic and green onions to golden brown, set them aside",
      "Low Heat, heat sugar until it turns golden, add in the meat, soy sauce, water",
      "Low Heat, cook until the water almost all evaporates (almost dry)",
      "Plate and serve!",
    ],
  },
  India: {
    name: "Sweet Rice Pudding (Kheer)",
    ingredients: [
      "Milk: 1 liter",
      "Rice: 1 Tsp",
      "Sugar: 2 Tsp",
      "Saffron: 6-7 strands",
    ],
    steps: [
      "Wash and soak rice in water.",
      "Soak saffron in one Tsp milk.",
      "Put milk on to boil. Once it boils, add soaked rice",
      "Let it cook on low heat for 45 mins. Keep stirring occasionally",
      "The milk will thicken up",
      "Add saffron and sugar.",
      "Enjoy!",
    ],
  },
  Korea: {
    name: "Kimchi Pancake (김치 전 Kimchi Jeon)",
    ingredients: [
      "Kimchi: 1 cup",
      "Kimchi Juice: ⅓ cup",
      "Minced Garlic: ½ spoon",
      "Frying Mix: 1 cup",
      "Water: ⅔ cup",
    ],
    steps: [
      "Slice kimchi into small pieces and place into a bowl",
      "Add the frying mix, kimchi juice, and garlic to the bowl",
      "Pour in the water slowly and mix until the dough is fully combined",
      "Spoon mixture into hot oiled pan and fry on both sides until golden",
      "Serve on a plate and enjoy!",
    ],
  },
  Jewish: {
    name: "-",
    ingredients: [
      "-",
    ],
    steps: [
      "Placeholder",
    ],
  },
};

let currentRecipe = recipes.Taiwan;

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
  // console.log("--GEMINI START RUNNING")
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

async function ask(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  // const prompt = 
  //   "";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text
}

async function recipeStep() {
  console.log(`\nToday's Recipe: ${currentRecipe.name}`);
  console.log('\nIngredients needed:');
  currentRecipe.ingredients.forEach((ingredient, index) => {
    console.log(`${index + 1}. ${ingredient}`);
  });

  for (let i = 0; i < currentRecipe.steps.length; i++) {
    console.log(`\nStep ${i + 1}: ${currentRecipe.steps[i]}`);

    //question asking loop
    const handleQuestions = async () => {
      return new Promise(resolveStep => rl.question('\nDo you have any questions about this step? (y/n) ', async (ans) => {
        if (ans.toLowerCase() === 'y') {
          rl.question('\nPlease ask your question: ', async (question) => {
            const prompt = `Based on the step: '${currentRecipe.steps[i]}' in the recipe for '${currentRecipe.name}', a user asked: '${question}'. Please provide simple guidance or clarification.`;
            const answer = await ask(prompt);
            console.log(`\nGrandma: ${answer}`);
            resolveStep(handleQuestions()); 
          });
        } else {
          console.log('\nNo questions. Moving to the next step.');
          resolveStep();
        }
      }));
    };

    await handleQuestions();
  }
  // rl.close(); 
}


async function grandmaAI() {
  console.log("\nHello my grandkid! Are you hungry? (y/n)");

  const getResponse = (prompt) => {
    return new Promise(resolve => rl.question(prompt, resolve));
  };

  let hungry = await getResponse("\nAre you hungry? (y/n) ");

  if (hungry.toLowerCase() !== 'y') {
    console.log("\nOk, come back if you are ever hungry!");
    rl.close();
    return;
  }

  async function recipeSelection() {
    console.log("\nThere are four dishes you can pick from:");
    console.log("1. Taiwanese Food");
    console.log("2. Jewish Food"); 
    console.log("3. Korean Food");
    console.log("4. Indian Food");

    let choice = await getResponse("\nWhich one would you like to cook? Enter the number: ");
    choice = parseInt(choice, 10);

    while (![1, 2, 3, 4].includes(choice)) {
      choice = await getResponse("\nPlease enter a number (1-4): ");
      choice = parseInt(choice, 10);
    }

    switch (choice) {
      case 1:
        currentRecipe = recipes.Taiwan;
        break;
      case 2:
        currentRecipe = recipes.Jewish; 
        break;
      case 3:
        currentRecipe = recipes.Korea;
        break;
      case 4:
        currentRecipe = recipes.India;
        break;
      default:
        currentRecipe = recipes.Taiwan; 
    }
    
    await recipeStep(currentRecipe);
  }

  await recipeSelection();

  let showCooking = await getResponse("\nDo you want to show grandma your cooking? (y/n) ");

  if (showCooking.toLowerCase() === 'y') {
    console.log("\nUploaded your cooking, grandma approved!");
  } else {
    console.log("\nAlright! Good day!");
  }

  rl.close();
}

// imgAnalyser()
// chat()
// recipeStep()

grandmaAI()