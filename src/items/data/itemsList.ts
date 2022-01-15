import miningItems from "./miningItems";
import woodcuttingItems from "./woodcuttingItems";
import { EquipmentSlot } from "./equipment";

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
  equipmentSlot?: EquipmentSlot;
};

const itemsList: { [key: string]: Item } = {
  goldPiece: { name: "Gold Pieces" },
  copperIngot: { name: "Copper Ingot", prices: { sell: 4 } },
  bronzeIngot: { name: "Bronze Ingot", prices: { sell: 6 } },
  ironIngot: { name: "Iron Ingot", prices: { sell: 8 } },
  steelIngot: { name: "Steel Ingot", prices: { sell: 15 } },
  shirt: { name: "Shirt", equipmentSlot: EquipmentSlot.body },
  pants: { name: "Pants", equipmentSlot: EquipmentSlot.legs },
  ...woodcuttingItems,
  ...miningItems,
};

export default itemsList;
export type { Item };
