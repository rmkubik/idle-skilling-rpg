import React from "react";
import { itemsList } from "~/src/items";
import { Location } from "~/src/locations";
import { SkillKeys } from "~src/skills";

const WoodcuttingProgress = ({
  hp,
}: {
  hp?: { current: number; max: number };
}) => {
  if (!hp) {
    return null;
  }

  return (
    <>
      <progress value={hp.current} max={hp.max} />
      <p>{`${hp.current}/${hp.max}`}</p>
    </>
  );
};

const WoodcuttingRewards = ({
  reward,
}: {
  reward?: {
    xp: {
      [SkillKeys.mining]?: number;
      [SkillKeys.woodcutting]?: number;
    };
    items: {
      [key: string]: number;
    };
  };
}) => {
  if (!reward) {
    return null;
  }

  return (
    <ul>
      {Object.entries(reward.items).map(([itemKey, quantity]) => {
        return (
          <li key={itemKey}>{`${itemsList[itemKey].name} x${quantity}`}</li>
        );
      })}
    </ul>
  );
};

const Woodcutting = ({ location }: { location: Location }) => {
  const { hp, reward } = location.action
    ? location.action
    : { hp: undefined, reward: undefined };

  return (
    <div>
      <h2>Woodcutting</h2>
      <WoodcuttingProgress hp={hp} />
      <WoodcuttingRewards reward={reward} />
    </div>
  );
};

export default Woodcutting;
