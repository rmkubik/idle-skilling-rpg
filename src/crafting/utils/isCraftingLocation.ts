import { Location } from "~/src/locations";

const isCraftingLocation = (location: Location, currentSubLocation: number) => {
  return (
    location.action?.type === "craft" ||
    location.subLocations?.[currentSubLocation]?.action?.type === "craft"
  );
};

export default isCraftingLocation;
