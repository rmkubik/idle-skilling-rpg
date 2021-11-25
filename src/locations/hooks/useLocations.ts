import { useState } from "react";
import { locationGraph } from "~/src/locations";

const useLocations = () => {
  const [locations, setLocations] = useState(locationGraph);
  const [currentLocation, setCurrentLocation] = useState("town");
  const [currentSubLocation, setCurrentSubLocation] = useState(0);

  return {
    locations,
    setLocations,
    currentLocation,
    setCurrentLocation,
    currentSubLocation,
    setCurrentSubLocation,
  };
};

export default useLocations;
