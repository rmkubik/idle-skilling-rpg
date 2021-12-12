import Inventory from "~/src/items/components/Inventory";
import Equipment from "./components/Equipment";
import itemsList, { Item } from "~/src/items/data/itemsList";
import { EquipmentSlot } from "./data/equipment";
import initialInventory from "~/src/items/data/initialInventory";
import useInventory from "~/src/items/hooks/useInventory";

export {
  Inventory,
  itemsList,
  initialInventory,
  useInventory,
  Equipment,
  EquipmentSlot,
};
export type { Item };
