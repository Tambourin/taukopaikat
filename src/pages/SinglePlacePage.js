import React from "react";
import { Segment, Header, Image, Divider, Button, Icon } from "semantic-ui-react";
import RoadNumber from "../components/RoadNumber";
import VoteButton from "../components/VoteButton";
import SinglePlaceAccordion from "../components/SinglePlaceAccordion";

const SinglePlacePage = ({ place }) => {
  console.log(place);
  if(!place) {
    return null;
  }
  return (
    <Segment textAlign="center">
      
      <Header as="h2" color="grey">{place.name.toUpperCase()}</Header>
      <Header color="blue">{place.city}</Header>
      <b>Auki tänään</b>:
      <RoadNumber roadNumber={place.highway} floated="right"/>
      <Divider />
      <Image rounded src={place.images[0]} alt="Pääkuva taukopaikasta" />
      <Divider />
      
      <VoteButton place={place}/>            
      <p>{place.address}</p>
      <Button 
        as="a" 
        href={`https://www.google.com/maps/search/?api=1&query=${place.name}`}
        size="tiny" 
        compact
        basic>
          <Image inline size="mini" src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/128/maps-icon.png" />
          Näytä Google Mapsissa
      </Button>
      <p>{place.description}</p>   
      <SinglePlaceAccordion />
      <h3>Kommentit:</h3>
    </Segment>
  )
}

export default SinglePlacePage;