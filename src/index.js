import ReactDOM from "react-dom";
import React from "react";

import {
  Locations,
  useLocations,
  rewardXp,
  rewardItems,
} from "~/src/locations";
import { Skills, useSkills } from "~/src/skills";
import { Inventory, itemsList, useInventory } from "~/src/items";
import { updateArray, useTick } from "~/src/common";
import { Crafting, isCraftingLocation } from "~/src/crafting";

const App = () => {
  const { skills, setSkills } = useSkills();
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

  useTick(() => {
    const location = locations.nodes[currentLocation];
    const item = itemsList[equippedItem];

    if (isCraftingLocation(location, currentSubLocation)) {
      // Crafting doesn't require a specific item, it will depend
      // on a given recipe
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
  }, [locations, currentLocation, inventory, equippedItem, currentSubLocation]);

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
      {isCraftingLocation(
        locations.nodes[currentLocation],
        currentSubLocation
      ) ? (
        <Crafting />
      ) : null}
    </div>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
