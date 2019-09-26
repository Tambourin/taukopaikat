import placesService from "../services/placesService";

const INIT_ACTIVE_GOOGLE_DATA = "INIT_ACTIVE_GOOGLE_DATA";

const defaultState = {
  data: {},
  isLoading: false,
  loadingErrored: false
}

const activeGoogleDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INIT_ACTIVE_GOOGLE_DATA:            
      return { ...state, data: action.place }
    default:
      return state;
  }
}

export const initActiveGoogleData = (id) => {
  return async (dispatch) => {
    try {
      const placeData = await placesService.getOneById(id);      
      dispatch({
        type: INIT_ACTIVE_GOOGLE_DATA,
        place: placeData
      });
      return placeData;
    } catch {
      console.log("error loading Google data");
    }
  }
}

export default activeGoogleDataReducer;