const SET_HIGHWAY = "SET_HIGHWAY";
const SET_DOES_NOT_BELONG_TO_CHAIN = "SET_DOES_NOT_BELONG_TO_CHAIN";

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

export const setDoesNotBelongToChain = () => {
  return {
    type: SET_DOES_NOT_BELONG_TO_CHAIN,
  }
}

export default filterReducer;