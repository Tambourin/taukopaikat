export const arrangeOptions = {
  VOTES: "VOTES",
  APLHABETIC: "ALPHABETIC",
  NORTH_TO_SOUTH: "NORTH_TO_SOUTH",
  CITY: "CITY"  
};

const defaultViewOptions = {
  showOnMap: false,
  arrangeBy: arrangeOptions.VOTES
};

const SHOW_ON_MAP = "SHOW_ON_MAP";
const SHOW_AS_LIST = "SHOW_AS_LIST";
const SET_ARRANGE_BY = "SET_ARRANGE_BY";

const viewOptionsReducer = (state = defaultViewOptions, action) => {
  switch (action.type) {
    case SHOW_AS_LIST:
      return { ...state, showOnMap: false };
    case SHOW_ON_MAP:
      return { ...state, showOnMap: true };
    case SET_ARRANGE_BY:
      return { ...state, arrangeBy: action.arrangeBy};
    default:
      return state;
  }
};

export const showAsList = () => {
  return {
    type: SHOW_AS_LIST
  };
};

export const showOnMap = () => {
  return {
    type: SHOW_ON_MAP
  };
};

export const setArrangeBy = (arrangeBy) => {
  return {
    type: SET_ARRANGE_BY,
    arrangeBy: arrangeBy
  }
}
export default viewOptionsReducer;
