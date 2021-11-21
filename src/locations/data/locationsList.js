const locationsList = [
  {
    name: "Stone Mines",
    action: {
      type: "mine",
      hp: { current: 10, max: 10 },
      reward: { xp: { mining: 4 }, items: { stone: 1 } },
    },
  },
  { name: "Oak Forest" },
  { name: "Anvil" },
  { name: "Crafting House" },
];

export default locationsList;
