function getBaseLog(base: number, x: number) {
  return Math.log(x) / Math.log(base);
}

/**
 * Reference for components of exponential growth:
 * https://en.wikipedia.org/wiki/Exponential_growth (Basic formula)
 *
 * Curve below plotted on Wolfram Alpha:
 * https://www.wolframalpha.com/input/?i=plot+84+*+%281.3%5E%28%28x+-+1%29%2F2%29%29
 */
const initialValue = 84;
const growthFactor = 1.3;
const xShift = -2;
const timeConstant = 1 / 2;

const getXpDiffFromPrevLevel = (level: number) => {
  const currentXp =
    initialValue * Math.pow(growthFactor, (level + xShift) * timeConstant);

  return currentXp;
};

const getTotalXpForLevel = (level: number) => {
  let total = 0;

  // We don't start using the curve until level 2.
  // Level 1 is 0 xp.
  for (let i = 2; i <= level; i++) {
    total += getXpDiffFromPrevLevel(i);
  }

  return total;
};

const getXpDiffFromPrevLevelInverse = (xp: number) => {
  const currentLevel = getBaseLog(
    growthFactor,
    Math.pow(xp / initialValue, 1 / timeConstant) *
      (1 / Math.pow(growthFactor, xShift))
  );

  return currentLevel;
};

const getLevel = (xp: number) => {
  for (let level = 1; level <= 99; level += 1) {
    // If we have less XP than the next level, we should
    // return the current level.
    if (xp < getTotalXpForLevel(level + 1)) {
      return level;
    }
  }

  // If we exceed our tries, we should return level 99.
  // The max level.
  return 99;
};

const getPrettyLevel = (xp: number) => {
  const level = getLevel(xp);

  if (level < 1) {
    return 1;
  }

  return Math.floor(level);
};

export { getPrettyLevel };
