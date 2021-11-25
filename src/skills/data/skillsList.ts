export enum SkillKeys {
  mining,
  smithing,
  woodcutting,
  crafting,
  fletching,
  cartography,
  pathfinding,
  enchanting,
  alchemy,
  hunting,
  cooking,
  inventing,
  researching,
  foraging,
  fishing,
  gardening,
}

export type Skill = {
  name: string;
  level: number;
  xp: number;
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
  [SkillKeys.mining]: { name: "Mining", level: 1, xp: 0 },
  // smithing: { name: "Smithing", level: 1, xp: 0 },
  [SkillKeys.woodcutting]: { name: "Woodcutting", level: 1, xp: 0 },
  [SkillKeys.crafting]: { name: "Crafting", level: 1, xp: 0 },
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
