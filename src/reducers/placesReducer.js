import placesService from "../services/placesService";


const INIT_NOTES = "INIT_NOTES";

const placesReducer = (state = [], action) => {
  switch(action.type) {
    case(INIT_NOTES):
      return action.places;
    default:
      return state;
  }
}

export const initializePlaces = () => {
  return async (dispatch) => {
    const places = await placesService.getAll();
    dispatch({
      type: INIT_NOTES,
      places: places
    })
  }
}

export const getFilteredPlaces = (places, filter) => {
  return places.filter(place => (
    (place.highway === filter.highway || filter.highway === "all") &&
    (place.services.doesNotBelongToChain === filter.doesNotBelongToChain ||
      filter.doesNotBelongToChain === false) &&
    (place.services.isOpenTwentyFourHours === filter.isOpenTwentyFourHours ||
      filter.isOpenTwentyFourHours === false)
  ));
}

export default placesReducer;