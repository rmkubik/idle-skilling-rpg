import { useState } from "react";
import { initialInventory } from "~/src/items";

const useInventory = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [equippedItem, setEquippedItem] = useState("stonePickAxe");

  return {
    inventory,
    setInventory,
    equippedItem,
    setEquippedItem,
  };
};

export default useInventory;
