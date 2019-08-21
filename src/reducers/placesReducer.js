import placesService from "../services/placesService";

const INIT_PLACES = "INIT_PLACES";
const START_LOADING = "START_LOADING";
const LOADING_DONE = "LOADING_DONE";

const defaultState = {
  data : [],
  isLoading: false
}

const placesReducer = (state = defaultState, action) => {
  switch(action.type) {
    case(INIT_PLACES):
      return ({...state, data: action.places });
    case(START_LOADING):
      console.log("start");
      return ({ ...state, isLoading: true });
    case(LOADING_DONE):
      console.log("done");
      return ({ ...state, isLoading: false });
    default:
      return state;
  }
}
const startLoading = () => {
  return {
    type: START_LOADING
  }
}

const loadingDone = () => {
  return {
    type: LOADING_DONE
  }
}

const initPlaces = (places) => {
  return {
    type: INIT_PLACES,
    places: places
  }
}

export const initializePlaces = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    const places = await placesService.getAll();    
    dispatch(initPlaces(places));
    dispatch(loadingDone());
  }
}

export const getFilteredPlaces = (places, filter) => {
  const placesFilter = (place) => {
    if (filter.highway !== place.highway && filter.highway !== "all") {
      return false;
    }     
    
    return true;
  }
  return places.filter(place => placesFilter(place));
}

export default placesReducer;