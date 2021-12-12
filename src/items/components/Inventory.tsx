import React from "react";
import { depictEntriesKeyType } from "~src/common";
import { itemsList } from "..";

const Inventory = ({
  inventory = {},
  items = {},
  equippedItems = [],
  tryEquipItem,
}: {
  inventory: { [key: string]: number };
  items: typeof itemsList;
  equippedItems: string[];
  setEquippedItems: (itemKey: string[]) => void;
  tryEquipItem: (itemKey: string) => void;
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

            const isEquipped = equippedItems.some(
              (equippedItem) => equippedItem === itemKey
            );

            return (
              <li
                key={itemKey}
                onClick={() => {
                  tryEquipItem(itemKey);
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
