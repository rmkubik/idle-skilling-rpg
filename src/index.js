import ReactDOM from "react-dom";
import React from "react";

import { Locations, locationsList } from "~/src/locations";
import { Skills, skillsList } from "~/src/skills";
import { Inventory, itemsList, initialInventory } from "~/src/items";
import { updateArray } from "~/src/common/utils";

const App = () => {
  const [skills, setSkills] = React.useState(skillsList);
  const [locations, setLocations] = React.useState(locationsList);
  const [inventory, setInventory] = React.useState(initialInventory);
  const [tickRate] = React.useState(500);
  const tickRef = React.useRef();
  const [currentLocation, setCurrentLocation] = React.useState(0);
  const [equippedItem, setEquippedItem] = React.useState("stonePickAxe");

  React.useEffect(() => {
    tickRef.current = setInterval(() => {
      const location = locations[currentLocation];
      const item = itemsList[equippedItem];

      // Do equipped items allow location action to be performed?
      if (item.action?.type === location.action?.type) {
        let newCurrentHp = location.action.hp.current - item.action.damage;

        if (newCurrentHp <= 0) {
          // We finished performing this action!
          newCurrentHp = location.action.hp.max;

          const rewardedSkills = Object.entries(location.action.reward.xp);
          let newSkills = { ...skills };
          rewardedSkills.forEach(([skillKey, xp]) => {
            newSkills[skillKey].xp += xp;
          });
          setSkills(newSkills);

          const rewardedItems = Object.entries(location.action.reward.items);
          let newInventory = { ...inventory };
          rewardedItems.forEach(([itemKey, quantity]) => {
            if (!newInventory[itemKey]) {
              newInventory[itemKey] = 0;
            }

            newInventory[itemKey] += quantity;
          });
          setInventory(newInventory);
        }

        setLocations(
          updateArray(locations, currentLocation, {
            ...location,
            action: {
              ...location.action,
              hp: {
                ...location.action.hp,
                current: newCurrentHp,
              },
            },
          })
        );
      }
    }, tickRate);

    return () => clearInterval(tickRef.current);
  }, [tickRate, locations, currentLocation, inventory, equippedItem]);

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
