import React from "react";
import { Recipe, useCrafting } from "..";
import { itemsList } from "~/src/items";

const Crafting = () => {
  const { recipes, currentRecipe, setCurrentRecipe } = useCrafting();

  return (
    <div>
      <h2>Crafting</h2>
      <ul>
        {recipes.map((recipe, index) => {
          const inputs = Object.entries(recipe.input).map(
            ([itemKey, quantity]) => {
              const itemName = itemsList[itemKey].name;

              return `${itemName} x${quantity}`;
            }
          );
          const output = itemsList[recipe.output.item].name;

          return (
            <li
              style={{
                textDecoration: "underline",
                fontWeight: index === currentRecipe ? "bold" : "normal",
                cursor: "pointer",
              }}
              onClick={() => setCurrentRecipe(index)}
              key={index}
            >
              {`${output} - ${recipe.hp.current}`}
              <ul>
                {inputs.map((input) => (
                  <li>{input}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Crafting;
