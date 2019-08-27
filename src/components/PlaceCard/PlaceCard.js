import React from "react";
import { connect } from "react-redux";
import { Image, Card } from "semantic-ui-react";
import RoadNumber from "../RoadNumber";
import VoteButton from "../VoteButton";
import BestOfHighwayRibbon from "../BestOfHighWayRibbon";
import {
  placeWithMostVotes,
  getFilteredPlaces
} from "../../reducers/placesSelectors";

const PlaceCard = ({ place, placesOnThisHighway }) => {
  return (
    <Card>             
      {place.images.length > 0 ? (
        <Image
          size="small"
          wrapped
          ui={false}
          src={place.images[0]}
          alt="kuva taukopaikasta"
        />
      ) : (
        <Image
          src="https://static.thenounproject.com/png/340719-200.png"
          alt="Kuvaa ei saatavilla"
        />
      )}               
      {placeWithMostVotes(placesOnThisHighway).id === place.id 
        ? <BestOfHighwayRibbon highway={place.highway} />
        : null
      }      
      <Card.Content>      
        <Card.Header>
          {place.name}
          <RoadNumber roadNumber={place.highway} floated="right" />
        </Card.Header>
        <Card.Meta>{place.address}</Card.Meta>
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
