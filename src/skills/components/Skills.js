import React from "react";
import { getPrettyLevel } from "~/src/skills/utils/levels";

const Skills = ({ skills = [] }) => {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {Object.entries(skills).map(([skillKey, skill]) => (
          <li key={skillKey}>
            {`${skill.name} - ${getPrettyLevel(skill.xp)} / 99`}
            <br />
            {`${skill.xp} xp`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
