import React from "react";
import { itemsList } from "~/src/items";
import { Location } from "~/src/locations";
import { SkillKeys } from "~src/skills";

const MiningProgress = ({ hp }: { hp?: { current: number; max: number } }) => {
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

const MiningRewards = ({
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

const Mining = ({ location }: { location: Location }) => {
  const { hp, reward } = location.action
    ? location.action
    : { hp: undefined, reward: undefined };

  return (
    <div>
      <h2>Mining</h2>
      <MiningProgress hp={hp} />
      <MiningRewards reward={reward} />
    </div>
  );
};

export default Mining;
