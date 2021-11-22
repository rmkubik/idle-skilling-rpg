const rewardXp = (skills, location) => {
  const rewardedSkills = Object.entries(location.action.reward.xp);

  let newSkills = { ...skills };

  rewardedSkills.forEach(([skillKey, xp]) => {
    newSkills[skillKey].xp += xp;
  });

  return newSkills;
};

const rewardItems = (inventory, location) => {
  const rewardedItems = Object.entries(location.action.reward.items);

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
