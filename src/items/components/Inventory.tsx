import React from "react";
import { depictEntriesKeyType, removeArrayIndex } from "~src/common";
import { itemsList } from "..";

const Inventory = ({
  inventory = {},
  items = {},
  equippedItems = [],
  setEquippedItems = () => {},
}: {
  inventory: { [key: string]: number };
  items: typeof itemsList;
  equippedItems: string[];
  setEquippedItems: (itemKey: string[]) => void;
}) => {
  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {depictEntriesKeyType<{ [key: string]: number }>(inventory).map(
          ([itemKey, quantity]) => {
            const item = items[itemKey];

            let itemLabel = item.name;

            if (quantity > 1) {
              itemLabel += ` - ${quantity}`;
            }

            const equippedItemIndex = equippedItems.findIndex(
              (equippedItem) => equippedItem === itemKey
            );
            const isEquipped = equippedItemIndex > -1;

            return (
              <li
                key={itemKey}
                onClick={() => {
                  let newEquippedItems = [...equippedItems];

                  if (isEquipped) {
                    // If item already equipped, un-equip the item
                    newEquippedItems = removeArrayIndex(
                      newEquippedItems,
                      equippedItemIndex
                    );
                  } else {
                    // Equip the new item otherwise
                    newEquippedItems = [...newEquippedItems, itemKey];
                  }

                  setEquippedItems(newEquippedItems);
                }}
                style={{
                  fontWeight: isEquipped ? "bold" : "normal",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {itemLabel}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Inventory;
