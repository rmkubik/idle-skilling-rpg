import React from "react";

const Inventory = ({
  inventory = {},
  equippedItem,
  setEquippedItem,
  items,
}) => {
  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {Object.entries(inventory).map(([itemKey, quantity]) => {
          const item = items[itemKey];

          let itemLabel = item.name;

          if (quantity > 1) {
            itemLabel += ` - ${quantity}`;
          }

          return (
            <li
              key={itemKey}
              onClick={() => setEquippedItem(itemKey)}
              style={{
                fontWeight: equippedItem === itemKey ? "bold" : "normal",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {itemLabel}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Inventory;
