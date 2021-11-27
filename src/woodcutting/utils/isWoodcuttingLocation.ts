import { Location } from "~/src/locations";

const isWoodcuttingLocation = (
  location: Location,
  currentSubLocation: number
) => {
  return (
    location.action?.type === "chop" ||
    location.subLocations?.[currentSubLocation]?.action?.type === "chop"
  );
};

export default isWoodcuttingLocation;
