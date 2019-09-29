import placesService from "../services/placesService";

const INIT_ACTIVE_GOOGLE_DATA = "INIT_ACTIVE_GOOGLE_DATA";
const SET_IS_LOADING = "SET_IS_LOADING";
const SET_LOADING_ERRORED = "SET_LOADING_ERRORED";

const defaultState = {
  data: {},
  isLoading: false,
  loadingErrored: false
}

const activeGoogleDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INIT_ACTIVE_GOOGLE_DATA:            
      return { ...state, data: action.place }
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    case SET_LOADING_ERRORED:
      return { ...state, loadingErrored: action.loadingErrored }
    default:
      return state;
  }
}

export const initActiveGoogleData = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING_ERRORED, loadingErrored: false });
    dispatch({ type: SET_IS_LOADING, isLoading: true });
    try {
      const placeData = await placesService.getGoogleDataByPlaceId(id);        
      dispatch({
        type: INIT_ACTIVE_GOOGLE_DATA,
        place: placeData
      });
      dispatch({ type: SET_IS_LOADING, isLoading: false });
      return placeData;
    } catch {
      console.log("error loading Google data");
      dispatch({ type: SET_LOADING_ERRORED, loadingErrored: true });
    }
  }
}

export default activeGoogleDataReducer;