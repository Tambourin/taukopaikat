import placesService from "../services/placesService";

const INIT_PLACES = "INIT_PLACES";
const START_LOADING = "START_LOADING";
const LOADING_DONE = "LOADING_DONE";
const UPDATE_PLACE = "UPDATE_PLACE";

const defaultState = {
  data: [],
  isLoading: false
};

const placesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INIT_PLACES:
      return { ...state, data: action.places };
    case START_LOADING:      
      return { ...state, isLoading: true };
    case LOADING_DONE:     
      return { ...state, isLoading: false };
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
    const updatedPlace = {
      ...place,
      votes: place.votes + 1
    }
    const response = await placesService.update(updatedPlace);
    dispatch(updatePlace(response));
    return response;
  }  
}

export const removeVoteFromPlace = (place) => {
  return async dispatch => {
    const updatedPlace = {
      ...place,
      votes: place.votes - 1
    }
    const response = await placesService.update(updatedPlace);
    dispatch(updatePlace(response));
    return response;
  }  
}

export const initializePlaces = () => {
  return async dispatch => {
    dispatch(startLoading());
    try{
      const places = await placesService.getAll();
      dispatch(initPlaces(places));
    } catch {
      console.log("InitializePlaces: Tietojen lataus ei onnistunut");
    }    
    dispatch(loadingDone());
  };
};

export const getFilteredPlaces = (places, filter) => {
  const placesFilter = place => {
    if (filter.highway !== place.highway && filter.highway !== "all") {
      return false;
    }

    return true;
  };
  return places.filter(place => placesFilter(place));
};

export default placesReducer;
