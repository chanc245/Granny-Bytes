const recipes = {
  Taiwan: {
    name: "Braised Pork Belly (焢肉 Kong Rou)",
    ingredients: [
      "1 lb Cubed pork belly",
      "Around 4 pieces Garlic",
      "1 Spoon Sugar",
      "2 pieces Green Onion",
      "Half a bowl Soy Sauce",
      "3 bowls Water",
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
      "1 liter Milk",
      "1 Tsp Rice",
      "2 Tsp Sugar",
      "6-7 strands Saffron",
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
      "1 cup Kimchi",
      "⅓ cup Kimchi Juice ",
      " ½ spoon Minced Garlic",
      "1 cup Frying Mix",
      " ⅔ cup Water",
    ],
    steps: [
      "Slice kimchi into small pieces and place into a bowl",
      "Add the frying mix, kimchi juice, and garlic to the bowl",
      "Pour in the water slowly and mix until the dough is fully combined",
      "Spoon mixture into hot oiled pan and fry on both sides until golden",
      "Serve on a plate and enjoy!",
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

let currentRecipe;

// Define the selectRecipe function
export function selectRecipe(cuisine) {
  if (cuisine === "Taiwanese") {
    console.log("t");
    currentRecipe = recipes.Taiwan;
    localStorage.setItem("recipe", JSON.stringify(recipes.Taiwan));
    return currentRecipe;
  } else if (cuisine === "SouthKorean") {
    console.log("s");
    currentRecipe = recipes.Korea;
    localStorage.setItem("recipe", JSON.stringify(recipes.Korea));
    return currentRecipe;
  } else if (cuisine === "CentralEuropean") {
    console.log("e");
    currentRecipe = recipes.CentralEurope;
    localStorage.setItem("recipe", JSON.stringify(recipes.CentralEurope));
    return currentRecipe;
  } else if (cuisine === "Indian") {
    console.log("i");
    currentRecipe = recipes.India;
    localStorage.setItem("recipe", JSON.stringify(recipes.India));
    return currentRecipe;
  }
}
