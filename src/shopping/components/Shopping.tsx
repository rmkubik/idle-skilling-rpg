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
        {Object.entries(inventory).map(([itemKey, quantity]) => {
          return (
            <li key={itemKey}>
              {`${itemsList[itemKey].name} x${quantity}`}
              <button
                onClick={() => {
                  const newInventory = { ...inventory };

                  newInventory[itemKey] -= 1;

                  if (newInventory[itemKey] === 0) {
                    delete newInventory[itemKey];
                  }

                  if (!newInventory.stonePickAxe || !newInventory.stoneAxe) {
                    // You cannot sell your last stonePickaxe or stoneAxe
                    // Eventually, we should be smarter about this
                    return;
                  }

                  if (!newInventory["goldPiece"]) {
                    newInventory["goldPiece"] = 0;
                  }

                  newInventory["goldPiece"] += 1;

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
