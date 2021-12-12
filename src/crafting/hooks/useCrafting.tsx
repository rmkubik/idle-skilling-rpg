import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { recipeList, Recipe } from "..";

type CraftingContextType = {
  recipes: Recipe[];
  setRecipes: Dispatch<SetStateAction<Recipe[]>>;
  currentRecipe: number;
  setCurrentRecipe: Dispatch<SetStateAction<number>>;
};

const CraftingContext = createContext<CraftingContextType>({
  recipes: [],
  setRecipes: () => {},
  currentRecipe: 0,
  setCurrentRecipe: () => {},
});

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
