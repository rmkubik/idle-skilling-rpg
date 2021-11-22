import { useState } from "react";
import { skillsList } from "~/src/skills";

const useSkills = () => {
  const [skills, setSkills] = useState(skillsList);

  return { skills, setSkills };
};

export default useSkills;
