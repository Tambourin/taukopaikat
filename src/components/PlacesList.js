import React from "react";
import PlaceCard from "./PlaceCard";

const style = {
  width: "80%",
  display: "flex",
  backgroundColor: "tomato",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  margin: "auto"
};

const PlacesList = ({ places, filter }) => {
  const placeFilter = place => {
    return (
      (place.highway === filter.highway || filter.highway === "all") &&
      (place.services.doesNotBelongToChain === filter.doesNotBelongToChain ||
        filter.doesNotBelongToChain === false) &&
      (place.services.isOpenTwentyFourHours === filter.isOpenTwentyFourHours ||
        filter.isOpenTwentyFourHours === false)
    );
  };

  return (
    <div style={style}>
      {places
        .filter(place => placeFilter(place))
        .map(place => (
          <PlaceCard key={place.id} place={place} />
        ))}
    </div>
  );
};

export default PlacesList;
