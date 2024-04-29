// Import the selectRecipe function from script.js
import { selectRecipe } from "./selection.js";
console.log("debug");
let currentRecipe;
let selectedRecipe;

const recipeLinks = document.querySelectorAll("a[data-cuisine]");
// Add click event listener to each <a> tag
recipeLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("debug again");
    const cuisine = this.getAttribute("data-cuisine");
    selectedRecipe = selectRecipe(cuisine);
    currentRecipe = selectedRecipe;
    console.log("debug again and again");
    console.log(currentRecipe);
    console.log(currentRecipe.name);
    console.log(currentRecipe.ingredients);
    console.log(currentRecipe.steps);
    // Open cooking.html
    window.location.href = this.getAttribute("href");
  });
});

const selectedRecipePromise = new Promise((resolve, reject) => {
  document.addEventListener("DOMContentLoaded", () => {
    resolve(selectedRecipe);
    console.log("promise");
  });
});
export { currentRecipe, selectedRecipePromise };
