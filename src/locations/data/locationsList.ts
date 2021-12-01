import { actionsList, Action } from "~/src/skills";

type Location = {
  name: string;
  action?: Action;
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
      subLocations: [
        { name: "Marketplace", action: actionsList.shopGeneral },
        {
          name: "Workshop",
          action: actionsList.craftGeneral,
        },
      ],
    },
    stoneMines: {
      name: "Stone Mines",
      action: actionsList.mineStone,
    },
    copperMines: {
      name: "Copper Mines",
      action: actionsList.mineCopper,
    },
    oakForest: {
      name: "Oak Forest",
      action: actionsList.chopOak,
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
