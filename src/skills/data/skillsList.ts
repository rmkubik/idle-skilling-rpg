export enum SkillKeys {
  mining,
  // smithing,
  woodcutting,
  crafting,
  // fletching,
  // cartography,
  // pathfinding,
  // enchanting,
  // alchemy,
  // hunting,
  // cooking,
  // inventing,
  // researching,
  // foraging,
  // fishing,
  // gardening,
}

export type SkillUnlock = {
  value: number;
  name: string;
  key: string;
};

export type Skill = {
  name: string;
  level: number;
  xp: number;
  unlocks: SkillUnlock[];
};

export type SkillsList = {
  [SkillKeys.mining]: Skill;
  [SkillKeys.woodcutting]: Skill;
  [SkillKeys.crafting]: Skill;
};

// export type SkillsList = {
//   [key: SkillKeys]: Skill;
// };

const skillsList: SkillsList = {
  [SkillKeys.mining]: {
    name: "Mining",
    level: 1,
    xp: 0,
    unlocks: [
      {
        value: 1,
        name: "Use Stone Tools",
        key: "useStonePick",
      },
      {
        value: 1,
        name: "Mine Stone",
        key: "mineStone",
      },
      {
        value: 2,
        name: "Use Copper Tools",
        key: "useCopperPick",
      },
      {
        value: 2,
        name: "Mine Copper Ore",
        key: "mineCopper",
      },
      {
        value: 2,
        name: "Mine Tin Ore",
        key: "mineTin",
      },
      {
        value: 5,
        name: "Use Bronze Tools",
        key: "useBronzePick",
      },
      {
        value: 10,
        name: "Use Iron Tools",
        key: "useIronPick",
      },
      {
        value: 10,
        name: "Mine Iron Ore",
        key: "mineIron",
      },
      {
        value: 15,
        name: "Mine Coal Ore",
        key: "mineCoal",
      },
      {
        value: 20,
        name: "Use Steel Tools",
        key: "useSteelPick",
      },
    ],
  },
  // smithing: { name: "Smithing", level: 1, xp: 0 },
  [SkillKeys.woodcutting]: {
    name: "Woodcutting",
    level: 1,
    xp: 0,
    unlocks: [
      {
        value: 1,
        name: "Use Stone Tools",
        key: "useStoneAxe",
      },
      {
        value: 1,
        name: "Chop Oak Logs",
        key: "chopOak",
      },
      {
        value: 2,
        name: "Use Copper Tools",
        key: "useCopperAxe",
      },
      {
        value: 5,
        name: "Use Bronze Tools",
        key: "useBronzeAxe",
      },
      {
        value: 10,
        name: "Use Iron Tools",
        key: "useIronAxe",
      },
      {
        value: 20,
        name: "Use Steel Tools",
        key: "useSteelAxe",
      },
    ],
  },
  [SkillKeys.crafting]: {
    name: "Crafting",
    level: 1,
    xp: 0,
    unlocks: [
      {
        value: 1,
        name: "Craft Stone Tools",
        key: "craftStone",
      },
      {
        value: 2,
        name: "Craft Copper Tools",
        key: "craftCopper",
      },
      {
        value: 5,
        name: "Craft Bronze Tools",
        key: "craftBronze",
      },
      {
        value: 10,
        name: "Craft Iron Tools",
        key: "craftIron",
      },
      {
        value: 20,
        name: "Craft Steel Tools",
        key: "craftSteel",
      },
    ],
  },
  // fletching: { name: "Fletching", level: 1, xp: 0 },
  // cartography: { name: "Cartography", level: 1, xp: 0 },
  // pathfinding: { name: "Pathfinding", level: 1, xp: 0 },
  // enchanting: { name: "Enchanting", level: 1, xp: 0 },
  // alchemy: { name: "Alchemy", level: 1, xp: 0 },
  // hunting: { name: "Hunting", level: 1, xp: 0 },
  // cooking: { name: "Cooking", level: 1, xp: 0 },
  // inventing: { name: "Inventing", level: 1, xp: 0 },
  // researching: { name: "Researching", level: 1, xp: 0 },
  // foraging
  // fishing
  // farming/gardening
};

export default skillsList;
