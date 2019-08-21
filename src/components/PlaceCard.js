import React from "react";
import { Icon, Button, Image, Card } from "semantic-ui-react";
import RoadNumber from "../components/RoadNumber";

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
        <Button icon floated="right" labelPosition='left'>
          <Icon name="like" />
          Äänestä parhaaksi
        </Button>
      </Card.Content>
    </Card>
  )
}

export default PlaceCard;