import { useState } from "react";
import { initialInventory } from "~/src/items";

const useInventory = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [equippedItems, setEquippedItems] = useState(["stonePickAxe"]);

  const [equippedItem] = equippedItems;
  const setEquippedItem = (itemKey: string) => setEquippedItems([itemKey]);

  return {
    inventory,
    setInventory,
    equippedItem,
    setEquippedItem,
    equippedItems,
    setEquippedItems,
  };
};

export default useInventory;
