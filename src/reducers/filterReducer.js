const SET_HIGHWAY = "SET_HIGHWAY";

const initialFilter = {
  highway: "all",
  doesNotBelongToChain: false,
  isOpenTwentyFourHours: false,
  hasPlayground: false,
  hasRestaurant: false,
  hasCofee: false,
  isAttraction: false
}

const filterReducer = (state=initialFilter, action) => {
  switch(action.type) {
    case(SET_HIGHWAY):
      console.log(action.highway);
      return { ...state, highway: action.highway };
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

export default filterReducer;