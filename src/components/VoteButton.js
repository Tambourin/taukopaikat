import React from "react";
import { connect } from "react-redux";
import { Icon, Button } from "semantic-ui-react";
import { votePlace } from "../reducers/placesReducer";

const VoteButton = ({ place, votePlace, votes }) => {
  const executeVote = () => {
    votePlace(place);
  }
  console.log(votes[place.highway]);
  
  if(votes[place.highway] !== place.id.toString()) {
    return (
      <Button onClick={executeVote} icon floated="right" labelPosition='left'>      
       <Icon name="like" />Äänestä parhaaksi      
    </Button>
    );
  }

  return (
    <div>
    <Icon name="like" color="red"/>{`Olet äänestänyt tätä paikkaa ${place.highway}-tien parhaaksi`}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    votes: state.votes
  }
} 

export default connect(mapStateToProps, { votePlace })(VoteButton);