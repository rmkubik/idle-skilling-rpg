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
  stonePickAxe: {
    name: "Stone Pickaxe",
    action: { type: "mine", damage: 1 },
    prices: { sell: 6 },
    unlockKey: "useStonePick",
  },
  copperPickAxe: {
    name: "Copper Pickaxe",
    action: { type: "mine", damage: 2 },
    prices: { sell: 14 },
    unlockKey: "useCopperPick",
  },
  stoneAxe: {
    name: "Stone Axe",
    action: { type: "chop", damage: 1 },
    prices: { sell: 6 },
    unlockKey: "useStoneAxe",
  },
  copperAxe: {
    name: "Copper Axe",
    action: { type: "chop", damage: 2 },
    prices: { sell: 14 },
    unlockKey: "useCopperAxe",
  },
  woodOak: { name: "Oak Logs", prices: { sell: 1 } },
  stone: { name: "Stone", prices: { sell: 1 } },
  copperOre: { name: "Copper Ore", prices: { sell: 2 } },
  copperIngot: { name: "Copper Ingot", prices: { sell: 4 } },
  goldPiece: { name: "Gold Pieces" },
};

export default itemsList;
