import { depictEntriesKeyType } from "~src/common";
import { SkillKeys, SkillsList, skillsList } from "..";
import { getPrettyLevel } from "./levels";

function getUnlockedKeys(skillKey: SkillKeys, level: number): string[] {
  return skillsList[skillKey].unlocks
    .filter((unlock) => unlock.value <= level)
    .map((unlock) => unlock.key);
}

const specialActionKeys = ["shopGeneral", "craftGeneral"];

function isActionUnlocked(actionKey: string) {
  if (specialActionKeys.some((key) => key === actionKey)) {
    return true;
  }

  return depictEntriesKeyType<SkillsList>(skillsList).some(
    ([skillKey, skill]) => {
      return skill.unlocks
        .filter((unlock) => {
          const level = getPrettyLevel(skill.xp);

          return unlock.value <= level;
        })
        .some((unlock) => {
          return actionKey === unlock.key;
        });
    }
  );
}

export { getUnlockedKeys, isActionUnlocked };
