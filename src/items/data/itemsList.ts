type Item = {
  name: string;
  action?: {
    type: string;
    damage?: number;
  };
};

const itemsList: { [key: string]: Item } = {
  stonePickAxe: { name: "Stone Pickaxe", action: { type: "mine", damage: 1 } },
  stoneAxe: { name: "Stone Axe", action: { type: "chop", damage: 1 } },
  woodOak: { name: "Oak Logs" },
  stone: { name: "Stone" },
  goldPiece: { name: "Gold Pieces" },
};

export default itemsList;
