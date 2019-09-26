import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Container } from "semantic-ui-react";
import RoadNumber from "../RoadNumber";
import VoteButton from "../VoteButton";
import BestOfHighwayRibbon from "../BestOfHighWayRibbon";
import {
  placeWithMostVotes,
  getFilteredPlaces
} from "../../reducers/placesSelectors";
import PlaceImage from "../../components/PlaceImage";

const PlaceCard = ({ place, placesOnThisHighway }) => {
  return (
    <Card>
      <Container as={Link} to={`/${place.id}`}>
        <PlaceImage imageId={place.images[0]} googleImageId={place.googleImage}/>
      </Container>
      {placeWithMostVotes(placesOnThisHighway).id === place.id 
        ? <BestOfHighwayRibbon highway={place.highway} />
        : null
      }      
      <Card.Content>      
        <Card.Header as={Link} to={`/${place.id}`}>
          {place.name}
          <RoadNumber roadNumber={place.highway} floated="right" />
        </Card.Header>
        <Card.Meta>{place.city}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <VoteButton place={place} />
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    placesOnThisHighway: getFilteredPlaces(state.places.data, {
      highway: ownProps.place.highway
    })
  };
};
export default connect(mapStateToProps)(PlaceCard);
