import { useState } from "react";
import { recipeList } from "..";

const useCrafting = () => {
  const [recipes, setRecipes] = useState(recipeList);
  const [currentRecipe, setCurrentRecipe] = useState(0);

  return { recipes, setRecipes, currentRecipe, setCurrentRecipe };
};

export default useCrafting;
