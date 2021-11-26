import React, { createContext, useContext, useState } from "react";
import { recipeList } from "..";

const CraftingContext = createContext({});

const CraftingContextProvider = ({ children }: { children: any }) => {
  const [recipes, setRecipes] = useState(recipeList);
  const [currentRecipe, setCurrentRecipe] = useState(0);

  return (
    <CraftingContext.Provider
      value={{ recipes, setRecipes, currentRecipe, setCurrentRecipe }}
    >
      {children}
    </CraftingContext.Provider>
  );
};

const useCrafting = () => useContext(CraftingContext);

export default useCrafting;
export { CraftingContextProvider };
