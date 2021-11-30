import Skills from "~/src/skills/components/Skills";
import SkillInfo from "./components/SkillInfo";
import skillsList, {
  SkillsList,
  Skill,
  SkillKeys,
} from "~/src/skills/data/skillsList";
import useSkills, { SkillsContextProvider } from "~/src/skills/hooks/useSkills";
import { getTotalXpForLevel } from "./utils/levels";

export type { Skill, SkillsList };
export {
  Skills,
  skillsList,
  useSkills,
  SkillKeys,
  SkillInfo,
  SkillsContextProvider,
  getTotalXpForLevel,
};
