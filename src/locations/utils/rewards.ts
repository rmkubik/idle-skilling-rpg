import { Location } from "~/src/locations/data/locationsList";
import { SkillsList, SkillKeys } from "~/src/skills";

const rewardXp = (skills: SkillsList, location: Location) => {
  const rewardedSkills = location.action
    ? Object.entries(location.action.reward.xp)
    : [];

  let newSkills: SkillsList = { ...skills };

  rewardedSkills.forEach(([skillKey, xp]) => {
    newSkills[skillKey].xp += xp;
  });

  return newSkills;
};

const rewardItems = (inventory, location: Location) => {
  const rewardedItems = location.action
    ? Object.entries(location.action.reward.items)
    : [];

  let newInventory = { ...inventory };

  rewardedItems.forEach(([itemKey, quantity]) => {
    if (!newInventory[itemKey]) {
      newInventory[itemKey] = 0;
    }

    newInventory[itemKey] += quantity;
  });

  return newInventory;
};

export { rewardXp, rewardItems };
