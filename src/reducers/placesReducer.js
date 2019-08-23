import placesService from "../services/placesService";

const INIT_PLACES = "INIT_PLACES";
const START_LOADING = "START_LOADING";
const LOADING_DONE = "LOADING_DONE";
const SET_LOADING_ERRORED = "SET_LOADING_ERRORED";
const UPDATE_PLACE = "UPDATE_PLACE";

const defaultState = {
  data: [],
  isLoading: false,
  loadingErrored: false
};

const placesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INIT_PLACES:
      return { ...state, data: action.places };
    case START_LOADING:      
      return { ...state, isLoading: true };
    case LOADING_DONE:     
      return { ...state, isLoading: false };
    case SET_LOADING_ERRORED:
      return { ...state, loadingErrored: action.value }
    case UPDATE_PLACE:
      return {
        ...state,
        data: state.data.map(place =>
          place.id === action.place.id ? action.place : place
        )
      };
    default:
      return state;
  }
};
const startLoading = () => {
  return {
    type: START_LOADING
  };
};

const loadingDone = () => {
  return {
    type: LOADING_DONE
  };
};

const setLoadingErrored = (value) => {
  return {
    type: SET_LOADING_ERRORED,
    value: value
  }
}

const initPlaces = places => {
  return {
    type: INIT_PLACES,
    places: places
  };
};

const updatePlace = place => {
  return {
    type: UPDATE_PLACE,
    place: place
  }
}

export const addVoteToPlace = (place) => {
  return async (dispatch) => {    
      const response = await placesService.update({
        ...place,
        votes: place.votes + 1
      });      
      dispatch(updatePlace(response));      
      return response;
  }  
}

export const removeVoteFromPlace = (place) => {
  return async dispatch => {  
      const response = await placesService.update({
        ...place,
        votes: place.votes - 1
      });
      dispatch(updatePlace(response));
      return response;    
  }  
}

export const initializePlaces = () => {
  return async dispatch => {
    dispatch(setLoadingErrored(false));
    dispatch(startLoading());
    try{
      const places = await placesService.getAll();
      dispatch(initPlaces(places));
    } catch {      
      dispatch(setLoadingErrored(true));
    }    
    dispatch(loadingDone());
  };
};

export const getFilteredPlaces = (places, filter) => {
  const placesFilter = place => {
    if ((filter.highway !== place.highway && filter.highway !== "all")
    || (filter.doesNotBelongToChain === true && place.services.doesNotBelongToChain === false)
    || (filter.isOpenTwentyFourHours === true && place.services.isOpenTwentyFourHours === false)
    || (filter.hasPlayground === true && place.services.hasPlayground === false)
    || (filter.hasRestaurant === true && place.services.hasRestaurant === false)
    || (filter.hasCofee === true && place.services.hasCofee === false)
    || (filter.isAttraction === true && place.services.isAttraction === false)) {
      return false;
    }
    return true;
  };
  return places.filter(place => placesFilter(place));
};

export default placesReducer;
