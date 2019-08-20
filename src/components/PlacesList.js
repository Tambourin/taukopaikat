import React from "react";
import { connect } from "react-redux";
import PlaceCard from "./PlaceCard";
import { Item } from "semantic-ui-react";
import { getFilteredPlaces } from "../reducers/placesReducer";

const PlacesList = ({ places }) => {
  if(!places) {
    return null;
  }

  return (
    <Item.Group divided>
      {places.map(place => (
          <PlaceCard key={place.id} place={place} />
      ))}
    </Item.Group>
  );
};

const mapStateToProps = (state) => {
  return {
    places: getFilteredPlaces(state.places, state.filter)
  }
}

export default connect(mapStateToProps)(PlacesList);
