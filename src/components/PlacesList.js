import React from "react";
import { connect } from "react-redux";
import { Card, Segment, Loader } from "semantic-ui-react";
import PlaceCard from "./PlaceCard/PlaceCard";
import { getFilteredPlaces, orderByVotes } from "../reducers/placesSelectors";

const PlacesList = ({ places, isLoading, loadingErrored }) => {
  if (isLoading) {
    return <Loader active />;
  }  
  if (loadingErrored) {
    return <p>Tietojen lataus epäonnistui</p>
  }
  if (places.length === 0) {
    return (
      <Segment>
        <p>Haku ei tuottanut tuloksia</p>
      </Segment>
    );
  }
  
  return (
    <>
   
    <Segment>          
      <Card.Group centered stackable>
        {places.map(place => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </Card.Group>
    </Segment>
    </>
  );
};

const mapStateToProps = state => {
  return {
    places: orderByVotes(getFilteredPlaces(state.places.data, state.filter)),
    isLoading: state.places.isLoading,
    loadingErrored: state.places.loadingErrored
  };
};

export default connect(mapStateToProps)(PlacesList);
