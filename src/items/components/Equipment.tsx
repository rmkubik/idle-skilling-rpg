import React from "react";
import { EquipmentSlot } from "..";
import items from "../data/itemsList";

const getFirstMatchingSlotItem = (
  equippedItems: string[],
  slot: EquipmentSlot
) => {
  let foundItem;

  for (let equippedItemKey of equippedItems) {
    const equippedItem = items[equippedItemKey];

    if (equippedItem.equipmentSlot === slot) {
      foundItem = equippedItem;
      break;
    }
  }

  return foundItem;
};

const getItemName = (equippedItems: string[]) => (slot: EquipmentSlot) => {
  const equippedItem = getFirstMatchingSlotItem(equippedItems, slot);

  return equippedItem ? equippedItem.name : "none";
};

const Equipment = ({ equippedItems }: { equippedItems: string[] }) => {
  const getItemNameWithEquippedItems = getItemName(equippedItems);

  return (
    <div>
      <h2>Equipment</h2>
      <ul>
        <li>Head: {getItemNameWithEquippedItems(EquipmentSlot.head)}</li>
        <li>Neck: {getItemNameWithEquippedItems(EquipmentSlot.neck)}</li>
        <li>Back: {getItemNameWithEquippedItems(EquipmentSlot.back)}</li>
        <li>Body: {getItemNameWithEquippedItems(EquipmentSlot.body)}</li>
        <li>Legs: {getItemNameWithEquippedItems(EquipmentSlot.legs)}</li>
        <li>
          Main hand: {getItemNameWithEquippedItems(EquipmentSlot.mainHand)}
        </li>
        <li>Off hand: {getItemNameWithEquippedItems(EquipmentSlot.offHand)}</li>
        <li>Ring 1: {getItemNameWithEquippedItems(EquipmentSlot.ring1)}</li>
        <li>Ring 2: {getItemNameWithEquippedItems(EquipmentSlot.ring2)}</li>
        <li>Feet: {getItemNameWithEquippedItems(EquipmentSlot.boots)}</li>
      </ul>
    </div>
  );
};

export default Equipment;
