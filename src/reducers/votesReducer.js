const SET_VOTE = "SET_VOTE";

const defaultState = {
  1: "2",
  2: "2",
  3: "2",
  4: "2",
  5: "2",
  6: "2",
}

const votesReducer = (state=defaultState, action) => {
  switch(action.type) {
    case(SET_VOTE):
     return ({ ...state, [action.highway]: action.place });
    default:
      return state; 
  }
}

export const setVote = (place) => {
  return {
    type: SET_VOTE,
    highway: place.highway,
    place: place.placeId
  }
}

export default votesReducer;