import { useState } from "react";
import { locationsList } from "~/src/locations";

const useLocations = () => {
  const [locations, setLocations] = useState(locationsList);
  const [currentLocation, setCurrentLocation] = useState(0);

  return { locations, setLocations, currentLocation, setCurrentLocation };
};

export default useLocations;
