import { SkillKeys } from "~src/skills";

type Recipe = {
  unlockKey: string;
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
    unlockKey: "craftStone",
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
    unlockKey: "craftStone",
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
  {
    unlockKey: "craftCopper",
    output: {
      item: "copperIngot",
      xp: {
        [SkillKeys.crafting]: 6,
      },
    },
    hp: {
      current: 5,
      max: 5,
    },
    input: {
      copperOre: 1,
    },
  },
  {
    unlockKey: "craftCopper",
    output: {
      item: "copperPickAxe",
      xp: {
        [SkillKeys.crafting]: 25,
      },
    },
    hp: {
      current: 15,
      max: 15,
    },
    input: {
      copperIngot: 3,
      woodOak: 2,
    },
  },
  {
    unlockKey: "craftCopper",
    output: {
      item: "copperAxe",
      xp: {
        [SkillKeys.crafting]: 25,
      },
    },
    hp: {
      current: 15,
      max: 15,
    },
    input: {
      copperIngot: 2,
      woodOak: 3,
    },
  },
  {
    unlockKey: "craftBronze",
    output: {
      item: "bronzeIngot",
      xp: {
        [SkillKeys.crafting]: 8,
      },
    },
    hp: {
      current: 6,
      max: 6,
    },
    input: {
      copperOre: 1,
      tinOre: 1,
    },
  },
  {
    unlockKey: "craftBronze",
    output: {
      item: "bronzePickAxe",
      xp: {
        [SkillKeys.crafting]: 42,
      },
    },
    hp: {
      current: 17,
      max: 17,
    },
    input: {
      bronzeIngot: 3,
      woodOak: 2,
    },
  },
  {
    unlockKey: "craftBronze",
    output: {
      item: "bronzeAxe",
      xp: {
        [SkillKeys.crafting]: 42,
      },
    },
    hp: {
      current: 17,
      max: 17,
    },
    input: {
      bronzeIngot: 2,
      woodOak: 3,
    },
  },
  {
    unlockKey: "craftIron",
    output: {
      item: "ironIngot",
      xp: {
        [SkillKeys.crafting]: 10,
      },
    },
    hp: {
      current: 6,
      max: 6,
    },
    input: {
      ironOre: 1,
    },
  },
  {
    unlockKey: "craftIron",
    output: {
      item: "ironPickAxe",
      xp: {
        [SkillKeys.crafting]: 64,
      },
    },
    hp: {
      current: 20,
      max: 20,
    },
    input: {
      ironIngot: 3,
      woodOak: 2,
    },
  },
  {
    unlockKey: "craftIron",
    output: {
      item: "ironAxe",
      xp: {
        [SkillKeys.crafting]: 64,
      },
    },
    hp: {
      current: 20,
      max: 20,
    },
    input: {
      ironIngot: 2,
      woodOak: 3,
    },
  },
  {
    unlockKey: "craftSteel",
    output: {
      item: "steelIngot",
      xp: {
        [SkillKeys.crafting]: 14,
      },
    },
    hp: {
      current: 10,
      max: 10,
    },
    input: {
      ironOre: 1,
      coal: 2,
    },
  },
  {
    unlockKey: "craftSteel",
    output: {
      item: "steelPickAxe",
      xp: {
        [SkillKeys.crafting]: 89,
      },
    },
    hp: {
      current: 26,
      max: 26,
    },
    input: {
      steelIngot: 3,
      woodOak: 2,
    },
  },
  {
    unlockKey: "craftSteel",
    output: {
      item: "steelAxe",
      xp: {
        [SkillKeys.crafting]: 89,
      },
    },
    hp: {
      current: 26,
      max: 26,
    },
    input: {
      steelIngot: 2,
      woodOak: 3,
    },
  },
];

export default recipeList;
export type { Recipe };
