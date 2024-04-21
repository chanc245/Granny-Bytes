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
    name: "Sweet Noodle Kugel (לאָקשן קוגל Lokshen Kugel)",
    ingredients: [
      "4 eggs medium",
      "1/2 cup granulated sugar",
      "1 cup cottage cheese",
      "2 cups heavy cream",
      "2 cups wide noodles uncooked",
      "1 stick of butter melted",
      "2/3 cup raisins",
      "2 tsp vanilla extract",
      "1 tsp salt",
      "6 butter cookies",
    ],
    steps: [
      "Cook wide noodles as indicated on the package.",
      "Mix/beat together eggs with sugar.",
      "Mix in cottage cheese, heavy cream, melted butter, vanilla, salt and raisins.",
      "Pour drained noodles over the egg mixture.",
      "Grease a baking dish then pour the noodle mix into the dish.",
      "Mix crumbled cookies with butter then sprinkle over the noodles.",
      "Bake in the oven (350°F) until the top is golden brown, approximately an hour.",
      "Serve warm or from the fridge.",
    ],
  },
};

let currentRecipe = recipes.Taiwan;

// ---------- GRANDMA BRAIN ---------- //
// ---------- GRANDMA BRAIN ---------- //
// ---------- GRANDMA BRAIN ---------- //
// ---------- GRANDMA BRAIN ---------- //
// ---------- GRANDMA BRAIN ---------- //

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

// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //

document.fonts.ready.then(() => {
  const term = 
  $('#commandDiv').terminal({


  }, {
    
  greetings: `Welcome welcome!!`});
});

// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //

async function requestAI(input) {
  console.log(`--requestAI started --input: ${input}`);

  const prompt = evaluationPrompt(input);

  // Make the POST request
  const response = await fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input: prompt }) 
  });

  if (response.ok) {
    console.log("--AI response OK");
    const jsonData = await response.json();
    const aiModResponse = jsonData.ai; 
    console.log(aiModResponse);
    return aiModResponse;
  } else {
    console.error("Error in submitting data.");
    return "Error in submitting data.";
  }
}