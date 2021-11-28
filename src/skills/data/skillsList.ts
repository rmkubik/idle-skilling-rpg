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
      },
      {
        value: 1,
        name: "Mine Stone",
      },
      {
        value: 2,
        name: "Use Copper Tools",
      },
      {
        value: 2,
        name: "Mine Copper Ore",
      },
      {
        value: 2,
        name: "Mine Tin Ore",
      },
      {
        value: 5,
        name: "Use Bronze Tools",
      },
      {
        value: 10,
        name: "Use Iron Tools",
      },
      {
        value: 10,
        name: "Mine Iron Ore",
      },
      {
        value: 15,
        name: "Mine Coal Ore",
      },
      {
        value: 20,
        name: "Use Steel Tools",
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
      },
      {
        value: 1,
        name: "Chop Oak Logs",
      },
      {
        value: 2,
        name: "Use Copper Tools",
      },
      {
        value: 5,
        name: "Use Bronze Tools",
      },
      {
        value: 10,
        name: "Use Iron Tools",
      },
      {
        value: 20,
        name: "Use Steel Tools",
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
      },
      {
        value: 2,
        name: "Craft Copper Tools",
      },
      {
        value: 5,
        name: "Craft Bronze Tools",
      },
      {
        value: 10,
        name: "Craft Iron Tools",
      },
      {
        value: 20,
        name: "Craft Steel Tools",
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
