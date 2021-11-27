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
    prices: { sell: 5 },
  },
  stoneAxe: {
    name: "Stone Axe",
    action: { type: "chop", damage: 1 },
    prices: { sell: 5 },
  },
  woodOak: { name: "Oak Logs", prices: { sell: 1 } },
  stone: { name: "Stone", prices: { sell: 1 } },
  goldPiece: { name: "Gold Pieces" },
};

export default itemsList;
