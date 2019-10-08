import placesService from "../services/placesService";

const INIT_PLACES = "INIT_PLACES";
const START_LOADING = "START_LOADING";
const LOADING_DONE = "LOADING_DONE";
const SET_LOADING_ERRORED = "SET_LOADING_ERRORED";
const UPDATE_PLACE = "UPDATE_PLACE";
const ADD_PLACE = "ADD_PLACE";

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
    case ADD_PLACE:
      return { ...state, data: [ ...state.data, action.place ] }
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

export const addPlace = (place) => {
  return async (dispatch) => {
    const newPlace = await placesService.postPlace(place);   
    dispatch({
      type: ADD_PLACE,
      place: newPlace
    });
    return newPlace;
  }
}

export const addComment = (place, comment) => {
  return async dispatch => {
    try {
      const addedComment = await placesService.postComment(place.id, comment);
      console.log(addedComment);
      const updatedPlace = {
        ...place,
        comments: [...place.comments, addedComment]
      };
      dispatch(updatePlace(updatedPlace));
      return updatedPlace;
    } catch {
      console.log("Adding a comment failed");
    }    
  }  
}

export const addImage = (place, imageData) => {  
  return async (dispatch) => {
    try {
      const updatedPlace = await placesService.postImage(place.id, imageData);     
      dispatch(updatePlace(updatedPlace));
    } catch {
      console.log("Adding an image failed");
    }
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

export default placesReducer;
