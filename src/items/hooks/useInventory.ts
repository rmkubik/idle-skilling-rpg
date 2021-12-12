import { useState } from "react";
import { initialInventory } from "~/src/items";
import { removeArrayIndex } from "~src/common";

const useInventory = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [equippedItems, setEquippedItems] = useState(["stonePickAxe"]);

  const [equippedItem] = equippedItems;

  const tryEquipItem = (itemKey: string): void => {
    const equippedItemIndex = equippedItems.findIndex(
      (equippedItem) => equippedItem === itemKey
    );
    const isEquipped = equippedItemIndex > -1;

    // is item equippable
    // check if item has an equipmentSlot

    // un-equip other items in the same slot

    // TODO: longer term, we should not use an
    // array of strings. We should change to a
    // map of { [key: EquipmentSlot]: string }

    let newEquippedItems = [...equippedItems];

    if (isEquipped) {
      // If item already equipped, un-equip the item
      newEquippedItems = removeArrayIndex(newEquippedItems, equippedItemIndex);
    } else {
      // Equip the new item otherwise
      newEquippedItems = [...newEquippedItems, itemKey];
    }

    setEquippedItems(newEquippedItems);
  };

  return {
    inventory,
    setInventory,
    equippedItem,
    equippedItems,
    setEquippedItems,
    tryEquipItem,
  };
};

export default useInventory;
