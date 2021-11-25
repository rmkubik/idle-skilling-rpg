import { SkillKeys } from "~/src/skills";

type Location = {
  name: string;
  action?: {
    type: string;
    hp: {
      current: number;
      max: number;
    };
    reward: {
      xp: {
        [SkillKeys.mining]?: number;
        [SkillKeys.woodcutting]?: number;
      };
      items: {
        stone: number;
      };
    };
  };
  subLocations?: Array<Location>;
};

type LocationGraph = {
  nodes: { [key: string]: Location };
  edges: { [key: string]: string[] };
};

const locationGraph: LocationGraph = {
  nodes: {
    town: {
      name: "Town",
      subLocations: [{ name: "Anvil" }, { name: "Crafting House" }],
    },
    stoneMines: {
      name: "Stone Mines",
      action: {
        type: "mine",
        hp: { current: 10, max: 10 },
        reward: { xp: { [SkillKeys.mining]: 4 }, items: { stone: 1 } },
      },
    },
    oakForest: {
      name: "Oak Forest",
      action: {
        type: "chop",
        hp: { current: 10, max: 10 },
        reward: { xp: { [SkillKeys.woodcutting]: 4 }, items: { woodOak: 1 } },
      },
    },
  },
  edges: {
    town: ["stoneMines", "oakForest"],
    stoneMines: ["town"],
    oakForest: ["town"],
  },
};

export { locationGraph };
export type { Location, LocationGraph };
