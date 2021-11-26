import React from "react";
import { Location } from "~/src/locations";

const LocationListItem = ({
  location,
  onClick,
  isSelected,
  currentSubLocation,
  setCurrentSubLocation = (index: number) => {},
}: {
  location: Location;
  onClick: () => void;
  isSelected: boolean;
  currentSubLocation?: number;
  setCurrentSubLocation?: (index: number) => void;
}) => {
  return (
    <li
      onClick={onClick}
      style={{
        fontWeight: isSelected ? "bold" : "normal",
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      {`${location.name}${
        location.action?.hp ? ` - ${location.action.hp.current}` : ""
      }`}
      <ul>
        {location.subLocations
          ? location.subLocations.map((location, index) => (
              <LocationListItem
                key={location.name}
                location={location}
                onClick={() => setCurrentSubLocation(index)}
                isSelected={isSelected && index === currentSubLocation}
              />
            ))
          : null}
      </ul>
    </li>
  );
};

export default LocationListItem;
