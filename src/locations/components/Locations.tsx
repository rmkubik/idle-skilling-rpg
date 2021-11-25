import React from "react";
import { Location } from "~/src/locations";
import { LocationListItem, LocationGraph } from "~/src/locations";

const Locations = ({
  locations,
  currentLocation,
  setCurrentLocation,
  currentSubLocation,
  setCurrentSubLocation,
}: {
  locations: LocationGraph;
  currentLocation: string;
  setCurrentLocation: (key: string) => {};
  currentSubLocation: number;
  setCurrentSubLocation: (index: number) => {};
}) => {
  return (
    <div>
      <h2>Locations</h2>
      <ul>
        {Object.entries(locations.nodes).map(([key, location]) => (
          <LocationListItem
            key={location.name}
            location={location}
            onClick={() => setCurrentLocation(key)}
            isSelected={currentLocation === key}
            currentSubLocation={currentSubLocation}
            setCurrentSubLocation={setCurrentSubLocation}
          />
        ))}
      </ul>
    </div>
  );
};

export default Locations;
