import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { SkillKeys, SkillsList, skillsList } from "~/src/skills";

type SkillsContextType = {
  skills: SkillsList;
  setSkills: Dispatch<SetStateAction<SkillsList>>;
  selectedSkill: SkillKeys | undefined;
  setSelectedSkill: Dispatch<SetStateAction<SkillKeys | undefined>>;
};

const SkillsContext = createContext<SkillsContextType>({
  skills: skillsList,
  setSkills: () => {},
  selectedSkill: undefined,
  setSelectedSkill: () => {},
});

const SkillsContextProvider = ({ children }: { children: any }) => {
  const [skills, setSkills] = useState(skillsList);
  const [selectedSkill, setSelectedSkill] = useState<SkillKeys | undefined>();

  return (
    <SkillsContext.Provider
      value={{ skills, setSkills, selectedSkill, setSelectedSkill }}
    >
      {children}
    </SkillsContext.Provider>
  );
};

const useSkills = () => useContext(SkillsContext);

export default useSkills;
export { SkillsContextProvider };
