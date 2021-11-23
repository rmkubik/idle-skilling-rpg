import { SkillKeys } from "~/src/skills";

export type Location = {
  name: string;
  action?: {
    type: string;
    hp: {
      current: number;
      max: number;
    };
    reward: {
      xp: {
        [SkillKeys.mining]: number;
      };
      items: {
        stone: number;
      };
    };
  };
};

const locationsList: Array<Location> = [
  {
    name: "Stone Mines",
    action: {
      type: "mine",
      hp: { current: 10, max: 10 },
      reward: { xp: { [SkillKeys.mining]: 4 }, items: { stone: 1 } },
    },
  },
  { name: "Oak Forest" },
  { name: "Anvil" },
  { name: "Crafting House" },
];

export default locationsList;
