import { depictEntriesKeyType } from "~src/common";
import { SkillKeys, SkillsList, skillsList } from "..";
import { getPrettyLevel } from "./levels";

const specialActionKeys = ["shopGeneral", "craftGeneral"];

function isKeyUnlocked(skills: SkillsList, key: string) {
  if (specialActionKeys.some((specialKey) => specialKey === key)) {
    return true;
  }

  return depictEntriesKeyType<SkillsList>(skills).some(([skillKey, skill]) => {
    return skill.unlocks
      .filter((unlock) => {
        const level = getPrettyLevel(skill.xp);

        return unlock.value <= level;
      })
      .some((unlock) => {
        return key === unlock.key;
      });
  });
}

export { isKeyUnlocked };
