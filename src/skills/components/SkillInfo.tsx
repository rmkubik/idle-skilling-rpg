import React from "react";
import {
  SkillKeys,
  skillsList,
  useSkills,
  getTotalXpForLevel,
} from "~/src/skills";

const SkillInfo = () => {
  const { selectedSkill } = useSkills();

  const skill = selectedSkill && skillsList[selectedSkill];

  if (!skill) {
    return null;
  }

  return (
    <div>
      <h2>{skill.name} Unlocks</h2>
      <ul>
        {skill.unlocks.map((unlock) => (
          <li key={unlock.name}>{`${unlock.value} - ${unlock.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillInfo;
