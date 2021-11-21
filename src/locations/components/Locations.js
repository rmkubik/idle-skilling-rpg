import React from "react";

const Locations = ({ locations = [], currentLocation, setCurrentLocation }) => {
  return (
    <div>
      <h2>Locations</h2>
      <ul>
        {locations.map((location, index) => (
          <li
            key={location.name}
            onClick={() => setCurrentLocation(index)}
            style={{
              fontWeight: currentLocation === index ? "bold" : "normal",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >{`${location.name}${
            location.action ? ` - ${location.action.hp.current}` : ""
          }`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Locations;
