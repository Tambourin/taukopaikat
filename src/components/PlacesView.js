import React from "react";
import { connect } from "react-redux";
import { Loader, Segment } from "semantic-ui-react";
import PlacesList from "./PlacesList";
import PlacesMap from "./PlacesMap";
import {
  getFilteredPlaces,
  orderPlaces,
  limitNumberOfPlacesSelector
} from "../reducers/placesSelectors";
import ChooseArrangeBy from "../components/ChooseArrangeBy";
import ChoosePercentageSlider from "../components/ChoosePercentageSlider";

const PlacesView = ({
  showOnMap,
  places,
  isLoading,
  loadingErrored,
  arrangeBy,
  percentageOfPlacesToView
}) => {
  if (isLoading) {
    return (
      <Segment>
        <Loader active />
      </Segment>
    );
  }
  if (loadingErrored) {
    return <Segment>Tietojen lataus epäonnistui</Segment>;
  }

  return (
    <div>
      {showOnMap ? (
        <div>
          <ChoosePercentageSlider />
          <PlacesMap
            places={limitNumberOfPlacesSelector(
              orderPlaces(places, arrangeBy),
              percentageOfPlacesToView
            )}
          />
        </div>
      ) : (
        <div>
          <ChooseArrangeBy />
          <PlacesList places={orderPlaces(places, arrangeBy)} />
        </div>
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
    loadingErrored: state.places.loadingErrored,
    percentageOfPlacesToView: state.viewOptions.percentageOfPlacesToView
  };
};

export default connect(mapStateToProps)(PlacesView);
