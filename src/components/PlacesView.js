import React from "react";
import { connect } from "react-redux";
import { Loader, Segment } from "semantic-ui-react";
import PlacesList from "./PlacesList";
import PlacesMap from "./PlacesMap";
import { getFilteredPlaces, orderByVotes } from "../reducers/placesSelectors";

const PlacesView = ({ showOnMap, places, isLoading, loadingErrored }) => {
  if (isLoading) {
    return (<Segment><Loader active /></Segment>);
  }
  if (loadingErrored) {
    return <p>Tietojen lataus epäonnistui</p>;
  }

  return (
    <div>
      {showOnMap ? (
        <PlacesMap places={places} />
      ) : (
        <PlacesList places={places} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    places: orderByVotes(getFilteredPlaces(state.places.data, state.filter)),
    showOnMap: state.viewOptions.showOnMap,
    isLoading: state.places.isLoading,
    loadingErrored: state.places.loadingErrored
  };
};

export default connect(mapStateToProps)(PlacesView);
