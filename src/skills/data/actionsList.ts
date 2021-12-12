// TODO:
// getUnlockedKeys()
// Check to see unlocks relevant for this action
// If we have action key unlocked, proceed
// We need a SkillKeys to use getUnlockedKeys
// We only have an "action" type right now
// Perhaps we should not distinguish action types and
// skills?
// Perhaps skills can own multiple actions?
// What happens if I need to use multiple skills to
// take an action?
// So we need a map of actionKey strings that map
// to SkillKeys? Is there any difference between type/key
// now?
// Perhaps we need to promote actions to their own data
// collection now actually? And then we can reference
// them everywhere else. That's probably a good idea.

import { SkillKeys } from "..";

type Action = {
  key: string;
  type: string;
  hp?: {
    current: number;
    max: number;
  };
  reward?: {
    xp: {
      [SkillKeys.mining]?: number;
      [SkillKeys.woodcutting]?: number;
    };
    items: {
      [key: string]: number;
    };
  };
};

const actionsList: { [key: string]: Action } = {
  shopGeneral: { key: "shopGeneral", type: "shop" },
  craftGeneral: {
    key: "craftGeneral",
    type: "craft",
  },
  mineStone: {
    key: "mineStone",
    type: "mine",
    hp: { current: 10, max: 10 },
    reward: { xp: { [SkillKeys.mining]: 4 }, items: { stone: 1 } },
  },
  mineCopper: {
    key: "mineCopper",
    type: "mine",
    hp: { current: 15, max: 15 },
    reward: { xp: { [SkillKeys.mining]: 6 }, items: { copperOre: 1 } },
  },
  chopOak: {
    key: "chopOak",
    type: "chop",
    hp: { current: 10, max: 10 },
    reward: { xp: { [SkillKeys.woodcutting]: 4 }, items: { woodOak: 1 } },
  },
  mineTin: {
    key: "mineTin",
    type: "mine",
    hp: { current: 15, max: 15 },
    reward: { xp: { [SkillKeys.mining]: 8 }, items: { tinOre: 1 } },
  },
  mineIron: {
    key: "mineIron",
    type: "mine",
    hp: { current: 17, max: 17 },
    reward: { xp: { [SkillKeys.mining]: 10 }, items: { ironOre: 1 } },
  },
  mineCoal: {
    key: "mineCoal",
    type: "mine",
    hp: { current: 20, max: 20 },
    reward: { xp: { [SkillKeys.mining]: 15 }, items: { coal: 1 } },
  },
};

export default actionsList;
export type { Action };
