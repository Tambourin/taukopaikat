import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Image, Card } from "semantic-ui-react";
import RoadNumber from "../RoadNumber";
import VoteButton from "../VoteButton";
import BestOfHighwayRibbon from "../BestOfHighWayRibbon";
import {
  placeWithMostVotes,
  getFilteredPlaces
} from "../../reducers/placesSelectors";
import { BASE_IMAGE_URL } from "../../constants/constants";

const PlaceCard = ({ place, placesOnThisHighway }) => {
  return (
    <Card>
      {place.images ? (
        <Image
          as={Link} to={`/${place.id}`} 
          ui={false}
          src={`${BASE_IMAGE_URL}c_fill,w_290,h_200/${place.images[0]}`}
          alt="kuva taukopaikasta"
        />
      ) : (
        <Image
          as={Link} to={`/${place.id}`} 
          ui={false}
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${place.googleImages[0]}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          alt="kuva taukopaikasta"
        />
      )}             
                     
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
