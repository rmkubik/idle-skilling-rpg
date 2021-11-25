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

    // Do equipped items allow location action to be performed?
    if (item.action?.type === location.action?.type) {
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
      });
    }
  }, [locations, currentLocation, inventory, equippedItem]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Skills skills={skills} />
      <Locations
        locations={locations}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <Inventory
        items={itemsList}
        inventory={inventory}
        equippedItem={equippedItem}
        setEquippedItem={setEquippedItem}
      />
    </div>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
