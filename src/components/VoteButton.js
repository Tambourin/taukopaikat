import React from "react";
import { connect } from "react-redux";
import { Icon, Button } from "semantic-ui-react";
import { addVoteToPlace, removeVoteFromPlace } from "../reducers/placesReducer";
import { addToVoted, removeFromVoted } from "../reducers/votesReducer";

const VoteButton = ({ place, votes, addVoteToPlace, removeVoteFromPlace, addToVoted, removeFromVoted }) => {
  console.log("place", place.name, place.votes);
  
  const executeVote = async () => {
    const placeVotedOnSameHighway = votes.find(p => p.highway === place.highway);     
    if (placeVotedOnSameHighway) { 
      const removedPlace = await removeVoteFromPlace(placeVotedOnSameHighway);      
      removeFromVoted(removedPlace);            
    }
    const updatedPlace = await addVoteToPlace(place);
    addToVoted(updatedPlace);    
  } 
  
  if (votes.find(p => p.id === place.id)) {
    return (
      <div>
      <Icon name="like" color="red"/>{`Olet äänestänyt tätä paikkaa ${place.highway}-tien parhaaksi`}
      </div>
    );
  }
  
  return (
    <Button onClick={executeVote} icon floated="right" labelPosition='left'>      
     <Icon name="like" />Äänestä parhaaksi      
  </Button>
  );
}

const mapStateToProps = state => {
  return {
    votes: state.votes
  }
} 

export default connect(mapStateToProps, { addVoteToPlace, removeVoteFromPlace, addToVoted, removeFromVoted })(VoteButton);