import { Location } from "~/src/locations";

const isMiningLocation = (location: Location, currentSubLocation: number) => {
  return (
    location.action?.type === "mine" ||
    location.subLocations?.[currentSubLocation]?.action?.type === "mine"
  );
};

export default isMiningLocation;
