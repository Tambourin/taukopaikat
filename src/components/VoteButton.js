import React from "react";
import { connect } from "react-redux";
import { Icon, Button, Label } from "semantic-ui-react";
import { addVoteToPlace, removeVoteFromPlace } from "../reducers/placesReducer";
import { addToVoted, removeFromVoted } from "../reducers/votesReducer";

const VoteButton = ({ place, votes, addVoteToPlace, removeVoteFromPlace, addToVoted, removeFromVoted }) => {
  console.log("place", place.name, place.votes);

  const executeVote = async () => {
    const placeVotedOnSameHighway = votes.find(p => p.highway === place.highway);     
    try{
      if (placeVotedOnSameHighway) { 
        const removedPlace = await removeVoteFromPlace(placeVotedOnSameHighway);      
        removeFromVoted(removedPlace);            
      }
      const updatedPlace = await addVoteToPlace(place);
      addToVoted(updatedPlace);
    } catch (error) {
      console.log("Äänestys ei onnistun", error);      
    }
        
  } 
  
  if (votes.find(p => p.id === place.id)) {
    return (
      <div>
      <Icon name="like" color="red"/>{`Olet äänestänyt tätä paikkaa ${place.highway}-tien parhaaksi`}
      </div>
    );
  }

  return (
    <Button as="div" labelPosition='right'>
    <Button onClick={executeVote} icon floated="right" labelPosition='left'>      
     <Icon name="like" />Äänestä parhaaksi
     </Button>
     <Label as='a' basic pointing='left'>
      {place.votes}
      </Label>
    
    </Button>
  );
}

const mapStateToProps = state => {
  return {
    votes: state.votes
  }
} 

export default connect(mapStateToProps, { addVoteToPlace, removeVoteFromPlace, addToVoted, removeFromVoted })(VoteButton);