import Locations from "~/src/locations/components/Locations";
import LocationListItem from "~/src/locations/components/LocationListItem";
import {
  Location,
  locationGraph,
  LocationGraph,
} from "~/src/locations/data/locationsList";
import useLocations from "~/src/locations/hooks/useLocations";
import { rewardXp, rewardItems } from "~/src/locations/utils/rewards";

export {
  Locations,
  locationGraph,
  useLocations,
  rewardXp,
  rewardItems,
  LocationListItem,
};
export type { Location, LocationGraph };
