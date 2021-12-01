import Skills from "~/src/skills/components/Skills";
import SkillInfo from "./components/SkillInfo";
import skillsList, {
  SkillsList,
  Skill,
  SkillKeys,
} from "~/src/skills/data/skillsList";
import useSkills, { SkillsContextProvider } from "~/src/skills/hooks/useSkills";
import { getTotalXpForLevel } from "./utils/levels";
import { isKeyUnlocked } from "./utils/unlocks";
import actionsList, { Action } from "./data/actionsList";

export type { Skill, SkillsList, Action };
export {
  Skills,
  skillsList,
  actionsList,
  useSkills,
  SkillKeys,
  SkillInfo,
  SkillsContextProvider,
  getTotalXpForLevel,
  isKeyUnlocked,
};
