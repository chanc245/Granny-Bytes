// Imported the selectRecipe function from selection.js
import { selectRecipe } from "./selection.js";

let currentRecipe;
let selectedRecipe;

const recipeLinks = document.querySelectorAll("a[data-cuisine]");

recipeLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    //Finding all the cuisines stored in the data-cuisine attribute
    const cuisine = this.getAttribute("data-cuisine");
    selectedRecipe = selectRecipe(cuisine);

    //Storing the selectedRecipe information in currentRecipe Variable
    currentRecipe = selectedRecipe;

    //Each element of the object parsed
    console.log(currentRecipe.name);
    console.log(currentRecipe.ingredients);
    console.log(currentRecipe.recipesteps);
    console.log(currentRecipe.steps);

    // Opening cooking.html
    window.location.href = this.getAttribute("href");
  });
});

const selectedRecipePromise = new Promise((resolve) => {
  document.addEventListener("DOMContentLoaded", () => {
    resolve(selectedRecipe);
  });
});

export { currentRecipe };
