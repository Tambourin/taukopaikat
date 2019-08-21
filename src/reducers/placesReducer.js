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
      console.log("start");
      return { ...state, isLoading: true };
    case LOADING_DONE:
      console.log("done");
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

export const votePlace = (place) => {
  return async dispatch => {
    const previouslyVotedId = window.localStorage.getItem(place.highway);
    if(previouslyVotedId === place.id.toString()) {
      return null;
    }    
    

    const previouslyVotedPlace = await placesService.getOneById(previouslyVotedId);  
    const decreasedPlace = await placesService.update({
      ...previouslyVotedPlace,
      votes: previouslyVotedPlace.votes - 1
    });
    dispatch(updatePlace(decreasedPlace));        
    
    const updatedPlace = await placesService.update({
      ...place, 
      votes: place.votes + 1
    });    
    window.localStorage.setItem(place.highway, place.id);
    
    dispatch(updatePlace(updatedPlace));
    
  }
}

export const initializePlaces = () => {
  return async dispatch => {
    dispatch(startLoading());
    const places = await placesService.getAll();
    dispatch(initPlaces(places));
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
