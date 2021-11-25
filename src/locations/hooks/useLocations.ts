import { useState } from "react";
import { locationGraph } from "~/src/locations";

const useLocations = () => {
  const [locations, setLocations] = useState(locationGraph);
  const [currentLocation, setCurrentLocation] = useState("town");
  const [currentSubLocation, setcurrentSubLocation] = useState(0);

  return {
    locations,
    setLocations,
    currentLocation,
    setCurrentLocation,
    currentSubLocation,
    setcurrentSubLocation,
  };
};

export default useLocations;
