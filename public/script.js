// May2nd -- Most recent version,
// In this version, script_archive3.js + image upload result

// ---------- VARIABLES ---------- //
// ---------- VARIABLES ---------- //
// ---------- VARIABLES ---------- //
// ---------- VARIABLES ---------- //
// ---------- VARIABLES ---------- //

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
    recipesteps: [
      "Medium Heat, Fry the pork belly to golden brown (skin first), set it aside",
      "Medium Heat, Fry the garlic and green onions to golden brown, set them aside",
      "Low Heat, heat sugar until it turns golden, add in the meat, soy sauce, water",
      "Low Heat, cook until the water almost all evaporates (almost dry)",
      "Plate and serve!",
    ],

    steps: [
      {
        imagePath: "/assets/img/Food/Taiwan/Taiwan_Step1.png",
        description:
          "Medium Heat, Fry the pork belly to golden brown (skin first), set it aside",
      },
      {
        imagePath: "/assets/img/Food/Taiwan/Taiwan_Step2.png",
        description:
          "Medium Heat, Fry the garlic and green onions to golden brown, set them aside",
      },
      {
        imagePath: "/assets/img/Food/Taiwan/Taiwan_Step3.png",
        description:
          "Low Heat, heat sugar until it turns golden, add in the meat, soy sauce, water",
      },
      {
        imagePath: "/assets/img/Food/Taiwan/Taiwan_Step4.png",
        description:
          "Low Heat, cook until the water almost all evaporates (almost dry)",
      },
      {
        imagePath: "/assets/img/Food/Taiwan/Taiwan_Step5.png",
        description: "Plate and serve!",
      },
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
    recipesteps: [
      "Wash and soak rice in water.",
      "Soak saffron in one Tsp milk.",
      "Put milk on to boil. Once it boils, add soaked rice",
      "Let it cook on low heat for 45 mins. Keep stirring occasionally",
      "The milk will thicken up",
      "Add saffron and sugar.",
      "Enjoy!",
    ],
    steps: [
      {
        imagePath: "/assets/img/Food/India/India_step1.png",
        description: "Wash and soak rice in water.",
      },
      {
        imagePath: "/assets/img/Food/India/India_step2.png",
        description: "Soak saffron in one Tsp milk.",
      },
      {
        imagePath: "/assets/img/Food/India/India_step3.png",
        description: "Put milk on to boil. Once it boils, add soaked rice",
      },
      {
        imagePath: "/assets/img/Food/India/India_step4.png",
        description:
          "Let it cook on low heat for 45 mins. Keep stirring occasionally",
      },
      {
        imagePath: "/assets/img/Food/India/India_step5.png",
        description: "The milk will thicken up",
      },
      {
        imagePath: "/assets/img/Food/India/India_step6.png",
        description: "Add saffron and sugar.",
      },
      {
        imagePath: "/assets/img/Food/India/India_step7.png",
        description: "Enjoy!",
      },
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
    recipesteps: [
      "Slice kimchi into small pieces and place into a bowl",
      "Add the frying mix, kimchi juice, and garlic to the bowl",
      "Pour in the water slowly and mix until the dough is fully combined",
      "Spoon mixture into hot oiled pan and fry on both sides until golden",
      "Serve on a plate and enjoy!",
    ],
    steps: [
      {
        imagePath: "/assets/img/Food/SouthKorea/Korea_Step1.png",
        description: "Slice kimchi into small pieces and place into a bowl",
      },
      {
        imagePath: "/assets/img/Food/SouthKorea/Korea_Step2.png",
        description:
          "Add the frying mix, kimchi juice, and garlic into the bowl",
      },
      {
        imagePath: "/assets/img/Food/SouthKorea/Korea_Step3.png",
        description:
          "Pour in the water slowly and mix until the dough is fully combined",
      },
      {
        imagePath: "/assets/img/Food/SouthKorea/Korea_Step4.png",
        description:
          "Spoon mix into hot oiled pan and fry on both sides until golden",
      },
      {
        imagePath: "/assets/img/Food/SouthKorea/Korea_Step5.png",
        description: "Serve on a plate and enjoy!",
      },
    ],
  },
  CentralEurope: {
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
    recipesteps: [
      "Cook wide noodles as indicated on the package.",
      "Mix/beat together eggs with sugar.",
      "Mix in cottage cheese, heavy cream, melted butter, vanilla, salt and raisins.",
      "Pour drained noodles over the egg mixture.",
      "Grease a baking dish then pour the noodle mix into the dish.",
      "Mix crumbled cookies with butter then sprinkle over the noodles.",
      "Bake in the oven (350°F) until the top is golden brown, approximately an hour.",
      "Serve warm or from the fridge.",
    ],
    steps: [
      {
        imagePath: "/assets/img/Food/CentralEurope/europe_step1.png",
        description: "Cook wide noodles as indicated on the package.",
      },
      {
        imagePath: "/assets/img/Food/CentralEurope/europe_step2.png",
        description:
          "Mix/beat together eggs with sugar. Mix in cottage cheese, heavy cream, melted butter, vanilla, salt and raisins.",
      },
      {
        imagePath: "/assets/img/Food/CentralEurope/europe_step3.png",
        description:
          "Add drained noodles to the mixture and pour into a greased baking dish.",
      },
      {
        imagePath: "/assets/img/Food/CentralEurope/europe_step4.png",
        description:
          "Mix crumbled cookies with butter then sprinkle over the noodles.",
      },
      {
        imagePath: "/assets/img/Food/CentralEurope/europe_step5.png",
        description:
          "Bake in the oven (350°F) until the top is golden brown, approximately an hour.",
      },
      {
        imagePath: "/assets/img/Food/CentralEurope/europe_step6.png",
        description: "Serve warm or from the fridge.",
      },
    ],
  },
};

const granny = {
  StartDishFront: [
    `\nToday's special from Granny's kitchen is `,
    `\nAlright my lovely, today we're whipping up `,
    `\nWell, today Granny has `,
    `\nGather around! Today we're making `,
    `\nIt's a fine day for cooking, isn't it? Today's dish is `,
    `\nHello my darling, ready to cook? Today we're tackling `,
    `\nToday, Granny's got a special treat—`,
    `\nMy dear, today we're cooking up something wonderful: `,
    `\nLook what we have on the agenda today—it’s `,
    `\nToday's delicious endeavor is `,
  ],
  StartDishEnd: [
    `Let's roll up our sleeves and get cooking, my dear!`,
    `Let's begin with the first step, shall we?`,
    `Let's get started on those cooking steps, sweetheart.`,
    `Let me show you how it's done.`,
    `Let's dive into the cooking steps together, my love.`,
    `Here’s how we start...`,
    `Let's get started with our cooking steps, shall we?`,
    `Follow along with me now.`,
    `Ready to start the adventure in Granny's kitchen?`,
    `Let's begin our culinary journey together.`,
  ],
  Step: [
    "Now, for Step ",
    "Moving on to Step ",
    "Next up, we have Step ",
    "Alright, sweetheart, let's get to Step ",
    "Onward to Step ",
    "Let’s gently step into ",
    "For our next trick, Step ",
    "Now, my dear one, let’s ease into Step ",
    "Ah, Step ",
  ],
  Ask: [
    "My dear, is there anything about this step that you'd like to ask your old granny?",
    "Sweetheart, do you need granny to explain this step a bit more?",
    "Is there something you'd like to ask me, dear?",
    "Do you have any little doubts about this part, my love?",
    "Anything puzzling you about this step, darling? Just ask your granny!",
    "Is there anything about this step that's troubling you, my dear?",
    "Can granny help clarify this part for you, honey?",
    "Do you need me to explain this step once more, love?",
    "Is there anything you're unsure about here, darling?",
    "Any wrinkles here you need granny to smooth out, dear?",
  ],
  Ques: [
    "If there's anything on your mind, don't hesitate to ask your granny, dear!",
    "Go ahead and ask granny anything you're wondering about, my love!",
    "If there's something you need to know, just speak up, sweetheart!",
    "Feel free to ask your old granny any questions, dearie!",
    "Anything puzzling you? Granny's here to help, just ask away, child!",
    "My dear, if anything's unclear, I'm all ears—what do you need to know?",
    "Granny's here to answer any of your questions, so don't be shy, ask away!",
    "If you have questions, my darling, you just ask them, okay?",
    "Let me know if there's anything on your mind, sweet pea!",
    "Any questions? Granny can help clear things up, just tell me what you need.",
    "If there's anything you're curious about, just holler at your granny, darling!",
  ],
  YesNo: [
    "Just tell Granny, yes or no, dear.",
    "Can you give me a yes or no, sweetheart?",
    "My darling, is it a yes or a no?",
    "Kindly let me know, yes or no, love.",
    "A simple yes or no will do, my dear.",
    "Would it be a yes or a no, my precious?",
    "All I need is a yes or no, child.",
    "Yes or no, honey, what will it be?",
    "Give Granny your answer, yes or no, please.",
    "Can you tell me, yes or no, darling?",
  ],
  Complete: [
    "Of course, my dear! You've completed all the steps of the recipe.",
    "Oh, my stars! Look at you, finishing all the recipe steps like a pro.",
    "Bravo, sweetheart! All the steps are complete—Granny is so proud.",
    "You've done it, darling! Every single step is checked off, just splendid.",
    "My dear, you've gone and completed all the steps! What a wonderful job. ",
    "Look at that, my precious! All the steps are done and dusted. ",
    "Oh, I'm just tickled pink! You've completed all the steps of the recipe. ",
    "You've wrapped up all the steps, love! Marvelous work indeed. ",
    "All done, my child! Every single step—Granny couldn't be happier. ",
    "There we go, all the steps finished! You've really outdone yourself, dear.",
  ],
};

// //Using local storage to access information about which recipe was selected by the user
let storedRecipe = JSON.parse(localStorage.getItem("recipe"));
let imgAnalysisResponse;
// let storedimgdata = localStorage.getItem("fileDatURL");
// const imageParts = [
//   { inlineData: { data: storedimgdata, mimeType: "image/jpeg" } },
// ];
//console.log(storedimgdata);

let currentRecipe = storedRecipe;
let userAsking = true;
let term;

// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //

$(document).ready(function () {
  term = $("#commandDiv").terminal(
    function (command) {
      if (command !== "") {
        try {
          var result = window.eval(command);
          if (result !== undefined) {
            this.echo(new String(result));
          }
        } catch (e) {
          this.error(new String(e));
        }
      }
    },
    {
      greetings: `*Never give out your password or credit card number in an instant message conversation!
______  
Granny:${grannyStartDishLoop(currentRecipe.name)}`, //grannyStart.Dish
      prompt: " ",
    }
  );

  // showIngredients(currentRecipe, term);
  askStep(currentRecipe, term, 0);
});

// ---------- FUNCTIONS ---------- //
// ---------- FUNCTIONS ---------- //
// ---------- FUNCTIONS ---------- //
// ---------- FUNCTIONS ---------- //
// ---------- FUNCTIONS ---------- //

function grannyStartDishLoop(recipeName) {
  let grannyStartDishCount = Math.floor(
    Math.random() * granny.StartDishFront.length
  );
  let currentConversation = `${granny.StartDishFront[grannyStartDishCount]}${recipeName}!${granny.StartDishEnd[grannyStartDishCount]}`;
  return currentConversation;
}

function randomGrannyConversation(grannyArray) {
  let grannyNum = Math.floor(Math.random() * grannyArray.length);
  let currentConversation = grannyArray[grannyNum];
  return currentConversation;
}

function showIngredients(currentRecipe, terminal) {
  currentRecipe.ingredients.forEach((ingredient, index) => {
    terminal.echo(`${index + 1}. ${ingredient}`);
  });
  terminal.echo(randomGrannyConversation(granny.StartDish)); //granny.StartDish
}

function askStep(currentRecipe, terminal, stepIndex) {
  if (stepIndex < currentRecipe.steps.length) {
    const currentStep = currentRecipe.steps[stepIndex].description;
    const currentImg = `"${currentRecipe.steps[stepIndex].imagePath}"`;

    updateCookingDiv(currentRecipe.steps[stepIndex]); //update the image with the steps

    terminal.echo(
      `\nGranny:\n${randomGrannyConversation(granny.Step)}${stepIndex + 1}: ${currentStep}`
    ); //granny.Step

    terminal.push(
      async function (command) {
        // console.log(await yesNoAnalyzer(command))
        if (command.match(/yes|y/i)) {
          terminal.echo(`\n${randomGrannyConversation(granny.Ques)}`); //granny.Ques
          terminal.push(
            function (userInput) {
              requestAI(currentRecipe.name, currentStep, userInput).then(
                (aiResponse) => {
                  terminal.echo(`\nGrandma:\n${aiResponse}\n`);
                  terminal.pop();
                }
              );
            },
            {
              prompt: "\nYou: \n",
            }
          );
        } else if (command.match(/no|n/i)) {
          terminal.pop();
          askStep(currentRecipe, terminal, stepIndex + 1); // Move to the next step
        } else {
          terminal.echo(`\n${randomGrannyConversation(granny.YesNo)}
          `); //granny.YesNoLoop
        }
      },
      {
        prompt: `\n${randomGrannyConversation(granny.Ask)}`, //granny.Ask
      }
    );
  } else {
    terminal.echo(`\n${randomGrannyConversation(granny.Complete)}`);

    askImage(imgAnalysisResponse, term);

    terminal.pop();
  }
}

// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //

async function yesNoAnalyzer(input) {
  const prompt = `
  Based on this user input: ${input}, please analyze whether the user's answer is more aligned with 'yes' or 'no'.

  If the answer leans more towards yes, respond with yes.
  If the answer leans more towards no, respond with no.

  Please answer only with yes or no.`;

  const response = await fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: prompt }),
  });

  if (response.ok) {
    const jsonData = await response.json();
    return jsonData.ai;
  } else {
    console.error("Error in submitting data.");
    return "Error in submitting data.";
  }
}

async function requestAI(dish, currentStep, userQues) {
  const prompt = evaluationPrompt(dish, currentStep, userQues);
  const response = await fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: prompt }),
  });

  if (response.ok) {
    const jsonData = await response.json();
    return jsonData.ai;
  } else {
    console.error("Error in submitting data.");
    return "Error in submitting data.";
  }
}

function evaluationPrompt(dish, currentStep, userQues) {
  return `
    You are a grandma assisting your grandchild in cooking. 
    Speak in a calm, warm, and caring manner.

    The current recipe is: ${dish}
    The current step is: ${currentStep}

    Your grandkid's question about this recipe is: ${userQues}
    
    Please provide short, concise, and simple guidance or clarification.
  `;
}

Dropzone.options.imageUpload = {
  paramName: "file",
  maxFilesize: 20,
  disablePreviews: true,
  accept: function (file, done) {
    document.getElementById("upload").style.backgroundImage =
      "url(" + URL.createObjectURL(file) + ")";

    // Access the file data here
    const reader = new FileReader();
    reader.onload = function (event) {
      //Separating the dataURL so that its its base64 data only
      const data = event.target.result.split(",", 2)[1];
      const type = file.type;

      // Sending data and type of the image in post request
      fetch("/vision", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data, type }),
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else {
            console.error("Error in sending image.");
            return "Error in sending image.";
          }
        })
        .then((responseText) => {
          imgAnalysisResponse = responseText;
          askImage(imgAnalysisResponse, term);
          console.log(imgAnalysisResponse);
          done();
        })
        .catch((error) => {
          console.error("Error:", error);
          done(error);
        });
    };
    reader.readAsDataURL(file);
  },
};

function askImage(imgAnalysisResponse, terminal) {
  terminal.echo("");
  if (imgAnalysisResponse) {
    terminal.echo(`\nGrandma:\n${imgAnalysisResponse}\n`);
  } else {
    terminal.echo(
      "No image analysis response available. Please check that the image size is less than 10MB"
    );
  }
}

// ---------- HTML RELATED ---------- //
// ---------- HTML RELATED ---------- //
// ---------- HTML RELATED ---------- //
// ---------- HTML RELATED ---------- //
// ---------- HTML RELATED ---------- //

function sendInput() {
  // Getting user input for grandma chat
  var input = document.getElementById("user_input").value;
  // Execute the input as a terminal command
  term.exec(input);
  // Clearing input after its sent
  document.getElementById("user_input").value = "";
}

function checkEnterKey(event) {
  if (event.keyCode === 13) {
    sendInput();
  }
}

let ingredientsList = currentRecipe.ingredients;
let stepsListdisplay = currentRecipe.recipesteps;

let recipeText = currentRecipe.name + "<br><br>";

// Parsing ingredients for display
recipeText += "<b>Ingredients:</b><br>";
ingredientsList.forEach((ingredient) => {
  recipeText += ingredient + "<br>";
});

// Parsing recipe steps for display
recipeText += "<br><b>Steps:</b><br>";
stepsListdisplay.forEach((recipesteps, index) => {
  recipeText += index + 1 + ". " + recipesteps + "<br>";
});

//Adding the recipe information to HTML
document.getElementById("recipe-text").innerHTML = recipeText;

function updateCookingDiv(stepObj) {
  ``;
  const imagePath = stepObj.imagePath;
  const imageAlt = stepObj.description;

  var cookingDiv = document.querySelector(".cooking");

  var imgElement = document.createElement("img");
  imgElement.src = imagePath;
  imgElement.alt = imageAlt;

  imgElement.style.width = "100%";

  cookingDiv.innerHTML = "";

  cookingDiv.appendChild(imgElement);
}
