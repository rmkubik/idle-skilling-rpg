import { SkillKeys } from "~src/skills";

type Recipe = {
  output: {
    item: string;
    xp: {
      [SkillKeys.crafting]: number;
    };
  };
  hp: {
    current: number;
    max: number;
  };
  input: {
    [key: string]: number;
  };
};

const recipeList: Recipe[] = [
  {
    output: {
      item: "stonePickAxe",
      xp: {
        [SkillKeys.crafting]: 12,
      },
    },
    hp: {
      current: 12,
      max: 12,
    },
    input: {
      stone: 3,
      woodOak: 2,
    },
  },
  {
    output: {
      item: "stoneAxe",
      xp: {
        [SkillKeys.crafting]: 12,
      },
    },
    hp: {
      current: 12,
      max: 12,
    },
    input: {
      stone: 2,
      woodOak: 3,
    },
  },
];

export default recipeList;
export type { Recipe };
