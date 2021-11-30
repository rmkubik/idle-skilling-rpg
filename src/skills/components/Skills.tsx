import React from "react";
import { getPrettyLevel } from "~/src/skills/utils/levels";
import {
  SkillKeys,
  SkillsList,
  useSkills,
  getTotalXpForLevel,
} from "~/src/skills";

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

function depictEntriesKeyType<T>(obj: T): Entries<T> {
  return Object.entries(obj) as any;
}

const Skills = ({ skills }: { skills: SkillsList }) => {
  const { selectedSkill, setSelectedSkill } = useSkills();

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {depictEntriesKeyType<SkillsList>(skills).map(([skillKey, skill]) => {
          const level = getPrettyLevel(skill.xp);

          return (
            <li
              onClick={() => setSelectedSkill(skillKey)}
              style={{
                fontWeight: selectedSkill === skillKey ? "bold" : "normal",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              key={skillKey}
            >
              {`${skill.name} - ${level} / 99`}
              <br />
              {`${skill.xp} / ${getTotalXpForLevel(level + 1)} xp`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
