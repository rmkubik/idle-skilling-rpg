import { Location } from "..";

const getAction = (location: Location, currentSubLocation: number) => {
  if (location.action) {
    return location.action;
  }

  if (!location.subLocations) {
    return;
  }

  if (location.subLocations[currentSubLocation].action) {
    return location.subLocations[currentSubLocation].action;
  }
};

export default getAction;
