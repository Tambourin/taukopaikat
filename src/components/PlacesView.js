import React from "react";
import { connect } from "react-redux";
import { Loader, Segment } from "semantic-ui-react";
import PlacesList from "./PlacesList";
import PlacesMap from "./PlacesMap";
import { getFilteredPlaces, orderPlaces } from "../reducers/placesSelectors";

const PlacesView = ({ showOnMap, places, isLoading, loadingErrored, arrangeBy }) => {
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
        <PlacesList places={orderPlaces(places, arrangeBy)} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    places: getFilteredPlaces(state.places.data, state.filter),
    showOnMap: state.viewOptions.showOnMap,
    arrangeBy: state.viewOptions.arrangeBy,
    isLoading: state.places.isLoading,
    loadingErrored: state.places.loadingErrored
  };
};

export default connect(mapStateToProps)(PlacesView);
