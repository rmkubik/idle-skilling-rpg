import { Item } from "./itemsList";

const miningItems: { [key: string]: Item } = {
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
  bronzePickAxe: {
    name: "Bronze Pickaxe",
    action: { type: "mine", damage: 3 },
    prices: { sell: 32 },
    unlockKey: "useBronzePick",
  },
  ironPickAxe: {
    name: "Iron Pickaxe",
    action: { type: "mine", damage: 4 },
    prices: { sell: 48 },
    unlockKey: "useIronPick",
  },
  steelPickAxe: {
    name: "Steel Pickaxe",
    action: { type: "mine", damage: 5 },
    prices: { sell: 62 },
    unlockKey: "useSteelPick",
  },
  stone: { name: "Stone", prices: { sell: 1 } },
  copperOre: { name: "Copper Ore", prices: { sell: 2 } },
  tinOre: { name: "Tin Ore", prices: { sell: 2 } },
  ironOre: { name: "Iron Ore", prices: { sell: 4 } },
  coal: { name: "Coal", prices: { sell: 5 } },
};

export default miningItems;
