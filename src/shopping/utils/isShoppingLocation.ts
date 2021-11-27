import { Location } from "~/src/locations";

const isShoppingLocation = (location: Location, currentSubLocation: number) => {
  return (
    location.action?.type === "shop" ||
    location.subLocations?.[currentSubLocation]?.action?.type === "shop"
  );
};

export default isShoppingLocation;
