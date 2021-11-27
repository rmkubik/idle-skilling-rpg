import React from "react";
import { itemsList } from "~/src/items";

const Shopping = ({
  inventory,
  setInventory,
}: {
  inventory: { [key: string]: any };
  setInventory: (inventory: { [key: string]: any }) => void;
}) => {
  return (
    <div>
      <h2>Shopping</h2>
      <ul>
        {Object.entries(inventory)
          .filter(([itemKey, quantity]) => {
            if (
              (itemKey === "stonePickAxe" && quantity === 1) ||
              (itemKey === "stoneAxe" && quantity === 1)
            ) {
              // You cannot sell your last stonePickaxe or stoneAxe
              // Eventually, we should be smarter about this
              return;
            }

            return itemsList[itemKey].prices !== undefined;
          })
          .map(([itemKey, quantity]) => {
            const item = itemsList[itemKey];

            return (
              <li key={itemKey}>
                {`${item.name} x${quantity}`}
                <button
                  onClick={() => {
                    if (item.prices === undefined) {
                      return;
                    }

                    const newInventory = { ...inventory };

                    newInventory[itemKey] -= 1;

                    if (newInventory[itemKey] === 0) {
                      delete newInventory[itemKey];
                    }

                    if (!newInventory["goldPiece"]) {
                      newInventory["goldPiece"] = 0;
                    }

                    newInventory["goldPiece"] += item.prices.sell;

                    setInventory(newInventory);
                  }}
                >
                  Sell x1
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Shopping;
