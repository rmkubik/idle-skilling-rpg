import { EquipmentSlot } from "./equipment";
import { Item } from "./itemsList";

const woodcuttingItems: { [key: string]: Item } = {
  stoneAxe: {
    name: "Stone Axe",
    action: { type: "chop", damage: 1 },
    prices: { sell: 6 },
    unlockKey: "useStoneAxe",
    equipmentSlot: EquipmentSlot.mainHand,
  },
  copperAxe: {
    name: "Copper Axe",
    action: { type: "chop", damage: 2 },
    prices: { sell: 14 },
    unlockKey: "useCopperAxe",
    equipmentSlot: EquipmentSlot.mainHand,
  },
  bronzeAxe: {
    name: "Bronze Axe",
    action: { type: "chop", damage: 3 },
    prices: { sell: 32 },
    unlockKey: "useBronzeAxe",
    equipmentSlot: EquipmentSlot.mainHand,
  },
  ironAxe: {
    name: "Iron Axe",
    action: { type: "mine", damage: 4 },
    prices: { sell: 48 },
    unlockKey: "useIronAxe",
    equipmentSlot: EquipmentSlot.mainHand,
  },
  steelAxe: {
    name: "Steel Axe",
    action: { type: "mine", damage: 5 },
    prices: { sell: 62 },
    unlockKey: "useSteelAxe",
    equipmentSlot: EquipmentSlot.mainHand,
  },
  woodOak: { name: "Oak Logs", prices: { sell: 1 } },
};

export default woodcuttingItems;
