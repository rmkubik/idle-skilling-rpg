import miningItems from "./miningItems";
import woodcuttingItems from "./woodcuttingItems";

type Item = {
  name: string;
  action?: {
    type: string;
    damage?: number;
  };
  prices?: {
    sell: number;
  };
  unlockKey?: string;
};

const itemsList: { [key: string]: Item } = {
  goldPiece: { name: "Gold Pieces" },
  copperIngot: { name: "Copper Ingot", prices: { sell: 4 } },
  bronzeIngot: { name: "Bronze Ingot", prices: { sell: 6 } },
  ironIngot: { name: "Iron Ingot", prices: { sell: 8 } },
  steelIngot: { name: "Steel Ingot", prices: { sell: 15 } },
  ...woodcuttingItems,
  ...miningItems,
};

export default itemsList;
export type { Item };
