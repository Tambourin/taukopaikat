import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import RoadNumber from "../RoadNumber";
import VoteButton from "../VoteButton";
import BestOfHighwayRibbon from "./BestOfHighWayRibbon";
import {
  placeWithMostVotes,
  getFilteredPlaces
} from "../../reducers/placesSelectors";
import PlaceImage from "../PlaceImage";

const MAX_IMAGE_HEIGHT = 210;

const PlaceCard = ({ place, placesOnThisHighway }) => {
  return (
    <Card>
      <Link to={`/places/${place.id}`} >
        <PlaceImage imageId={place.images[0]} googleImageId={place.googleImage} height={MAX_IMAGE_HEIGHT} />
      </Link>
      {placeWithMostVotes(placesOnThisHighway).id === place.id 
        ? <BestOfHighwayRibbon highway={place.highway} />
        : null
      }      
      <Card.Content>      
        <Card.Header as={Link} to={`/places/${place.id}`}>
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
