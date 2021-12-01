import Locations from "~/src/locations/components/Locations";
import LocationListItem from "~/src/locations/components/LocationListItem";
import {
  Location,
  locationGraph,
  LocationGraph,
} from "~/src/locations/data/locationsList";
import useLocations from "~/src/locations/hooks/useLocations";
import { rewardXp, rewardItems } from "~/src/locations/utils/rewards";
import getAction from "./utils/getAction";

export {
  Locations,
  locationGraph,
  useLocations,
  rewardXp,
  rewardItems,
  LocationListItem,
  getAction,
};
export type { Location, LocationGraph };
