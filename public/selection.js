// Recipe details and images stored
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

let currentRecipe;

// Defining the selectRecipe function
export function selectRecipe(cuisine) {
  if (cuisine === "Taiwanese") {
    currentRecipe = recipes.Taiwan;
    localStorage.setItem("recipe", JSON.stringify(recipes.Taiwan));
    return currentRecipe;
  } else if (cuisine === "SouthKorean") {
    currentRecipe = recipes.Korea;
    localStorage.setItem("recipe", JSON.stringify(recipes.Korea));
    return currentRecipe;
  } else if (cuisine === "CentralEuropean") {
    currentRecipe = recipes.CentralEurope;
    localStorage.setItem("recipe", JSON.stringify(recipes.CentralEurope));
    return currentRecipe;
  } else if (cuisine === "Indian") {
    currentRecipe = recipes.India;
    localStorage.setItem("recipe", JSON.stringify(recipes.India));
    return currentRecipe;
  }
}
