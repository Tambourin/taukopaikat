import React from "react";
import { connect } from "react-redux";
import { Icon, Button } from "semantic-ui-react";
import { addVoteToPlace, removeVoteFromPlace } from "../reducers/placesReducer";
import { addToVoted, removeFromVoted } from "../reducers/votesReducer";

const VoteButton = ({ place, fluid, places, votes, addVoteToPlace, removeVoteFromPlace, addToVoted, removeFromVoted }) => {
  
  const executeVote = async () => {
    const placeVotedOnSameHighway = votes.find(p => p.highway === place.highway);       
    try{
      if (placeVotedOnSameHighway) { 
        const placeToRemove = places.find(place => place.id === placeVotedOnSameHighway.id);
        if(placeToRemove) {
          await removeVoteFromPlace(placeToRemove);
        }                 
        removeFromVoted(placeVotedOnSameHighway);            
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
    <Button basic onClick={executeVote} icon labelPosition="left" fluid={fluid ? true : false}>      
      <Icon name="like" />Äänestä parhaaksi
    </Button>
  );
}

const mapStateToProps = state => {
  return {
    votes: state.votes,
    places: state.places.data
  }
} 

export default connect(mapStateToProps, { addVoteToPlace, removeVoteFromPlace, addToVoted, removeFromVoted })(VoteButton);