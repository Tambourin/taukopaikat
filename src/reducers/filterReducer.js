const SET_HIGHWAY = "SET_HIGHWAY";
const SET_DOES_NOT_BELONG_TO_CHAIN = "SET_DOES_NOT_BELONG_TO_CHAIN";
const SET_IS_OPEN_TWENTY_FOUR_HOURS = "SET_IS_OPEN_TWNETY_FOUR_HOURS";
const SET_HAS_PLAYGROUND = "SET_HAS_PLAYGROUND";
const SET_HAS_RESTAURANT = "SET_HAS_RESTAURANT";
const SET_HAS_COFFEE = "SET_HAS_COFFEE";
const SET_IS_ATTRACTION = "SET_IS_ATTRACTION";


const defaultState = {
  highway: "all",
  doesNotBelongToChain: false,
  isOpenTwentyFourHours: false,
  hasPlayground: false,
  hasRestaurant: false,
  hasCofee: false,
  isAttraction: false
}

const filterReducer = (state=defaultState, action) => {
  switch(action.type) {
    case(SET_HIGHWAY):
      return ({ ...state, highway: action.highway });
    case(SET_DOES_NOT_BELONG_TO_CHAIN):    
      return ({...state, doesNotBelongToChain: !state.doesNotBelongToChain });
    case(SET_IS_OPEN_TWENTY_FOUR_HOURS):    
      return ({...state, isOpenTwentyFourHours: !state.isOpenTwentyFourHours });
    case(SET_HAS_PLAYGROUND):    
      return ({...state, hasPlayground: !state.hasPlayground });
    case(SET_HAS_RESTAURANT):    
      return ({...state, hasRestaurant: !state.hasRestaurant });
    case(SET_HAS_COFFEE):    
      return ({...state, hasCofee: !state.hasCofee });
    case(SET_IS_ATTRACTION):    
      return ({...state, isAttraction: !state.isAttraction });
    default:
      return state;
  }
}

export const setHighway = (highway) => {  
  return {
    type: SET_HIGHWAY,
    highway: highway
  }
}

export const setDoesNotBelongToChain = () => ({ type: SET_DOES_NOT_BELONG_TO_CHAIN });
export const setIsOpenTwentyFourHours = () => ({ type: SET_IS_OPEN_TWENTY_FOUR_HOURS });
export const setHasPlayground = () => ({ type: SET_HAS_PLAYGROUND });
export const setHasRestaurant = () => ({ type: SET_HAS_RESTAURANT });
export const setHasCoffee = () => ({ type: SET_HAS_COFFEE });
export const setIsAttraction = () => ({ type: SET_IS_ATTRACTION });

export default filterReducer;