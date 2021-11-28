type Item = {
  name: string;
  action?: {
    type: string;
    damage?: number;
  };
  prices?: {
    sell: number;
  };
};

const itemsList: { [key: string]: Item } = {
  stonePickAxe: {
    name: "Stone Pickaxe",
    action: { type: "mine", damage: 1 },
    prices: { sell: 6 },
  },
  copperPickAxe: {
    name: "Copper Pickaxe",
    action: { type: "mine", damage: 2 },
    prices: { sell: 14 },
  },
  stoneAxe: {
    name: "Stone Axe",
    action: { type: "chop", damage: 1 },
    prices: { sell: 6 },
  },
  copperAxe: {
    name: "Copper Axe",
    action: { type: "chop", damage: 2 },
    prices: { sell: 14 },
  },
  woodOak: { name: "Oak Logs", prices: { sell: 1 } },
  stone: { name: "Stone", prices: { sell: 1 } },
  copperOre: { name: "Copper Ore", prices: { sell: 2 } },
  copperIngot: { name: "Copper Ingot", prices: { sell: 4 } },
  goldPiece: { name: "Gold Pieces" },
};

export default itemsList;
