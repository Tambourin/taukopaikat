import React from "react";
import { Image, Card } from "semantic-ui-react";
import RoadNumber from "./RoadNumber";
import VoteButton from "./VoteButton";

const PlaceCard = ({ place }) => {
  return (    
    <Card>            
      {
        place.images.length > 0 ? (<Image wrapped ui={false} src={place.images[0]} alt="kuva taukopaikasta" />) : 
        (<Image src="https://static.thenounproject.com/png/340719-200.png" alt="Kuvaa ei saatavilla" />) 
      }  
      
      <Card.Content>        
        <Card.Header>{place.name}</Card.Header>      
      </Card.Content>
      <Card.Content extra>
        <RoadNumber roadNumber={place.highway} floated="left"/>
        <VoteButton place={place} />
      </Card.Content>
    </Card>
  )
}

export default PlaceCard;