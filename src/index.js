import ReactDOM from "react-dom";
import React from "react";

import {
  Locations,
  useLocations,
  rewardXp,
  rewardItems,
  getAction,
} from "~/src/locations";
import {
  Skills,
  useSkills,
  SkillKeys,
  SkillInfo,
  SkillsContextProvider,
  isActionUnlocked,
} from "~/src/skills";
import { Inventory, itemsList, useInventory } from "~/src/items";
import { updateArray, useTick } from "~/src/common";
import {
  Crafting,
  isCraftingLocation,
  useCrafting,
  CraftingContextProvider,
} from "~/src/crafting";
import { Shopping, isShoppingLocation } from "~/src/shopping";
import { Mining, isMiningLocation } from "~/src/mining";
import { Woodcutting, isWoodcuttingLocation } from "~/src/woodcutting";

const App = () => {
  const { skills, setSkills, selectedSkill } = useSkills();
  const {
    locations,
    setLocations,
    currentLocation,
    setCurrentLocation,
    currentSubLocation,
    setCurrentSubLocation,
  } = useLocations();
  const { inventory, setInventory, equippedItem, setEquippedItem } =
    useInventory();
  const { recipes, setRecipes, currentRecipe } = useCrafting();

  useTick(() => {
    const location = locations.nodes[currentLocation];
    const item = itemsList[equippedItem];

    const action = getAction(location, currentSubLocation);

    if (!action) {
      return;
    }

    if (!isActionUnlocked(action.key)) {
      console.log(`action ${action.key} is not unlocked`);
      return;
    }

    if (isCraftingLocation(location, currentSubLocation)) {
      // Crafting doesn't require a specific item, it will depend
      // on a given recipe
      const recipe = recipes[currentRecipe];

      const inputEntries = Object.entries(recipe.input);
      const areAllInputQuantitiesMet = inputEntries.every(
        ([itemKey, quantity]) => inventory[itemKey] >= quantity
      );

      if (!areAllInputQuantitiesMet) {
        // Do not proceed with crafting if we don't have ingredients
        return;
      }

      // We should pull damage of 1 from the player's computed
      // total crafting damage after counting their equipment
      // and skills in the future.
      let newCurrentHp = recipe.hp.current - 1;

      if (newCurrentHp <= 0) {
        // We finished performing this action!
        newCurrentHp = recipe.hp.max;

        const newSkills = {
          ...skills,
          [SkillKeys.crafting]: {
            ...skills[SkillKeys.crafting],
            xp:
              skills[SkillKeys.crafting].xp +
              recipe.output.xp[SkillKeys.crafting],
          },
        };

        setSkills(newSkills);

        const newInventory = {
          ...inventory,
          [recipe.output.item]: inventory[recipe.output.item]
            ? inventory[recipe.output.item] + 1
            : 1,
        };

        inputEntries.forEach(([itemKey, quantity]) => {
          newInventory[itemKey] -= quantity;

          if (newInventory[itemKey] === 0) {
            delete newInventory[itemKey];
          }
        });

        setInventory(newInventory);
      }

      setRecipes(
        updateArray(recipes, currentRecipe, {
          ...recipes[currentRecipe],
          hp: {
            ...recipes[currentRecipe].hp,
            current: newCurrentHp,
          },
        })
      );
    } else if (item.action?.type === location.action?.type) {
      // Do equipped items allow location action to be performed?
      let newCurrentHp = location.action.hp.current - item.action.damage;

      if (newCurrentHp <= 0) {
        // We finished performing this action!
        newCurrentHp = location.action.hp.max;

        const newSkills = rewardXp(skills, location);
        setSkills(newSkills);

        const newInventory = rewardItems(inventory, location);
        setInventory(newInventory);
      }

      setLocations({
        ...locations,
        nodes: {
          ...locations.nodes,
          [currentLocation]: {
            ...location,
            action: {
              ...location.action,
              hp: {
                ...location.action.hp,
                current: newCurrentHp,
              },
            },
          },
        },
      });
    }
  }, [
    locations,
    currentLocation,
    inventory,
    equippedItem,
    currentSubLocation,
    recipes,
    currentRecipe,
  ]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "1rem",
        padding: "1rem",
        margin: "0 auto",
        maxWidth: "1100px",
        fontFamily: "Helvetica Neue, Helvetica",
      }}
    >
      <Skills skills={skills} />
      <Locations
        locations={locations}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        currentSubLocation={currentSubLocation}
        setCurrentSubLocation={setCurrentSubLocation}
      />
      <Inventory
        items={itemsList}
        inventory={inventory}
        equippedItem={equippedItem}
        setEquippedItem={setEquippedItem}
      />
      <SkillInfo />
      {isCraftingLocation(
        locations.nodes[currentLocation],
        currentSubLocation
      ) ? (
        <Crafting />
      ) : null}
      {isShoppingLocation(
        locations.nodes[currentLocation],
        currentSubLocation
      ) ? (
        <Shopping inventory={inventory} setInventory={setInventory} />
      ) : null}
      {isMiningLocation(
        locations.nodes[currentLocation],
        currentSubLocation
      ) ? (
        <Mining location={locations.nodes[currentLocation]} />
      ) : null}
      {isWoodcuttingLocation(
        locations.nodes[currentLocation],
        currentSubLocation
      ) ? (
        <Woodcutting location={locations.nodes[currentLocation]} />
      ) : null}
    </div>
  );
};

const AppWithProviders = () => {
  return (
    <SkillsContextProvider>
      <CraftingContextProvider>
        <App />
      </CraftingContextProvider>
    </SkillsContextProvider>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<AppWithProviders />, root);
