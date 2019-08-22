import votesService from "../services/votesService";

const ADD_VOTE = "ADD_VOTE";
const REMOVE_VOTE = "REMOVE_VOTE";
const INIT_VOTES = "INIT_VOTES";

const votesReducer = (state=[], action) => {
  switch (action.type) {
    case INIT_VOTES:
      return action.votes;
    case ADD_VOTE:
      return [ ...state, action.place ];
    case REMOVE_VOTE:
      return state.filter(place => place.id !== action.id);
    default:
      return state;
  }
}

export const initializeVotes = () => {
  let votes = votesService.getAll();
  if (votes === null) {
    votes = [];
  }  
  return dispatch => {
    dispatch({
      type: INIT_VOTES,
      votes: votes
    });
  }
}

export const addToVoted = (place) => {
  return dispatch => { 
      votesService.save(place);
      dispatch({
        type: ADD_VOTE,
        place: place
      });        
  }  
}

export const removeFromVoted = (place) => {
  return dispatch => {
    votesService.remove(place);
    dispatch({
      type: REMOVE_VOTE,
      id: place.id
    });
  }  
} 

export default votesReducer;