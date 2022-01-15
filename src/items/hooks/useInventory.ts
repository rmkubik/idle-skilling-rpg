import { useState } from "react";
import { initialInventory, itemsList } from "~/src/items";
import { removeArrayIndex } from "~src/common";

const useInventory = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [equippedItems, setEquippedItems] = useState([
    "stonePickAxe",
    "shirt",
    "pants",
  ]);

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
      // If another item is already in this slot, un-equip it
      const newlyEquippedItemSlot = itemsList[itemKey].equipmentSlot;
      const otherEquippedItemSlot = newEquippedItems.findIndex(
        (otherEquippedItemKey) =>
          itemsList[otherEquippedItemKey].equipmentSlot ===
          newlyEquippedItemSlot
      );

      if (otherEquippedItemSlot > -1) {
        newEquippedItems = removeArrayIndex(
          newEquippedItems,
          otherEquippedItemSlot
        );
      }

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
