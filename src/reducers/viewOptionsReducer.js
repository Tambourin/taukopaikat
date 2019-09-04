export const arrangeOptions = {
  VOTES: "VOTES",
  APLHABETIC: "ALPHABETIC",
  NORTH_TO_SOUTH: "NORTH_TO_SOUTH",
  SOUTH_TO_NORT: "SOUTH_TO_NORTH",
  CITY: "CITY"  
};

const defaultViewOptions = {
  showOnMap: false,
  arrangeBy: arrangeOptions.VOTES,
  percentageOfPlacesToView: 100
};

const SHOW_ON_MAP = "SHOW_ON_MAP";
const SHOW_AS_LIST = "SHOW_AS_LIST";
const SET_ARRANGE_BY = "SET_ARRANGE_BY";
const SET_PERCENTAGE_OF_PLACES_TO_VIEW = "SET_PERCENTAGE_OF_PLACES_TO_VIEW";

const viewOptionsReducer = (state = defaultViewOptions, action) => {
  switch (action.type) {
    case SHOW_AS_LIST:
      return { ...state, showOnMap: false };
    case SHOW_ON_MAP:
      return { ...state, showOnMap: true };
    case SET_ARRANGE_BY:
      return { ...state, arrangeBy: action.arrangeBy};
    case SET_PERCENTAGE_OF_PLACES_TO_VIEW:
      return { ...state, percentageOfPlacesToView: action.percentageOfPlacesToView};
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

export const setPercentageOfPlacesToView = (percentage) => {
  return {
    type: SET_PERCENTAGE_OF_PLACES_TO_VIEW,
    percentageOfPlacesToView: percentage
  }
}

export default viewOptionsReducer;
