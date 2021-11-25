import React from "react";
import { Location } from "~/src/locations";
import { LocationListItem, LocationGraph } from "~/src/locations";

const Locations = ({
  locations,
  currentLocation,
  setCurrentLocation,
}: {
  locations: LocationGraph;
  currentLocation: string;
  setCurrentLocation: (index: string) => {};
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
          />
        ))}
      </ul>
    </div>
  );
};

export default Locations;
