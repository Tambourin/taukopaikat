import React from "react";
import { Item, Icon, Button } from "semantic-ui-react";

const PlaceCard = ({ place }) => {
  return (
    <Item>      
      {
        place.images.length > 0 ? (<Item.Image size='tiny' src={place.images[0]} alt="kuva taukopaikasta" />) : 
        (<img src="https://static.thenounproject.com/png/340719-200.png" alt="Kuvaa ei saatavilla" />) 
      }
      <Item.Content>
        <Item.Header>{place.name}</Item.Header>
        <Item.Meta>Valtatie: ${place.highway}</Item.Meta>           
        <Button icon floated="right" labelPosition='left'>
          <Icon name="like" />
          Äänestä parhaaksi
        </Button>
      </Item.Content>
    </Item>
  )
}

export default PlaceCard;