import React from "react";
import { Location } from "~/src/locations";

const LocationListItem = ({
  location,
  onClick,
  isSelected,
}: {
  location: Location;
  onClick: () => {};
  isSelected: boolean;
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
        location.action ? ` - ${location.action.hp.current}` : ""
      }`}
      <ul>
        {location.locations
          ? location.locations.map((location) => (
              <LocationListItem
                key={location.name}
                location={location}
                onClick={onClick}
                isSelected={isSelected}
              />
            ))
          : null}
      </ul>
    </li>
  );
};

export default LocationListItem;
