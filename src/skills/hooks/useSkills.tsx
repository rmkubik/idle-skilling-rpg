import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { isKeyUnlocked, SkillKeys, SkillsList, skillsList } from "~/src/skills";

type SkillsContextType = {
  skills: SkillsList;
  setSkills: Dispatch<SetStateAction<SkillsList>>;
  selectedSkill: SkillKeys | undefined;
  setSelectedSkill: Dispatch<SetStateAction<SkillKeys | undefined>>;
  isKeyUnlocked: (key: string) => boolean;
};

const SkillsContext = createContext<SkillsContextType>({
  skills: skillsList,
  setSkills: () => {},
  selectedSkill: undefined,
  setSelectedSkill: () => {},
  isKeyUnlocked: () => false,
});

const SkillsContextProvider = ({ children }: { children: any }) => {
  const [skills, setSkills] = useState(skillsList);
  const [selectedSkill, setSelectedSkill] = useState<SkillKeys | undefined>();

  const isKeyUnlockedWrapper = (key: string) => {
    return isKeyUnlocked(skills, key);
  };

  return (
    <SkillsContext.Provider
      value={{
        skills,
        setSkills,
        selectedSkill,
        setSelectedSkill,
        isKeyUnlocked: isKeyUnlockedWrapper,
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};

const useSkills = () => useContext(SkillsContext);

export default useSkills;
export { SkillsContextProvider };
