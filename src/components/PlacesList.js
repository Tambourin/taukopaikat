import React from "react";
import { Card, Segment } from "semantic-ui-react";
import PlaceCard from "./PlaceCard/PlaceCard";
import ChooseArrangeBy from "./ChooseArrangeBy";

const PlacesList = ({ places }) => {
  if (!places) {
    return null;
  }
  if (places.length === 0) {
    return (
      <Segment>
        <p>Haku ei tuottanut tuloksia</p>
      </Segment>
    );
  }    
  
  return (      
    <Segment>
      <ChooseArrangeBy />      
      <Card.Group centered stackable>
        {places.map(place => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </Card.Group>      
    </Segment>  
  );
};

export default PlacesList;
