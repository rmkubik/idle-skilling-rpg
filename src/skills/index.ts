import Skills from "~/src/skills/components/Skills";
import skillsList, {
  SkillsList,
  Skill,
  SkillKeys,
} from "~/src/skills/data/skillsList";
import useSkills from "~/src/skills/hooks/useSkills";

export type { Skill, SkillsList };
export { Skills, skillsList, useSkills, SkillKeys };
