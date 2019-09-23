import React from "react";
import { connect } from "react-redux";
import { Segment, Header, Image, Divider, Button, Label, Icon, Grid } from "semantic-ui-react";
import RoadNumber from "../components/RoadNumber";
import VoteButton from "../components/VoteButton";
import SinglePlaceAccordion from "../components/SinglePlaceAccordion";
import CommentBox from "../components/CommentBox";
import PlacesList from "../components/PlacesList";
import { nearbyPlacesSelector } from "../reducers/placesSelectors";

const MAX_DIST_FOR_NEARBY_PLACES = 20;

const SinglePlacePage = ({ place, nearByPlaces }) => {    
  if(!place) {
    return null;
  }

  window.scrollTo(0, 0); // Always scroll to top when page is loaded
  
  return ( 
    <div> 
    <Segment textAlign="center" color="olive">
      <RoadNumber roadNumber={place.highway} floated="left"/>
      <Header  as="h2" style={{ fontSize: "2.5em" }} color="olive">{place.name.toUpperCase()}</Header>
      <Header color="yellow">{place.city}</Header>      
      <b>Auki tänään:</b>      
      <Divider />
      <Grid doubling columns={2}>
        <Grid.Column>
          <Image centered bordered rounded src={place.images[0]} alt="Pääkuva taukopaikasta" />
        </Grid.Column>
        <Grid.Column>
          <p>{place.address}, {place.city}</p>
        <Icon name="world" />
        <a href={place.www}>Verkkosivu</a>       
        <Segment basic secondary>
          {place.description}
        </Segment>
        <Segment basic> 
          <Label.Group size="large">
            <Label color="blue">
              <Icon name='like' />
                taukopaikat.fi 
              <Label.Detail>{place.votes}</Label.Detail>
            </Label>
            <Label color="blue">
              <Icon name='star'/>
                Arvio Google Mapsissa
              <Label.Detail>{place.votes}</Label.Detail>
            </Label>
          </Label.Group>      
          <VoteButton place={place}/>
          </Segment>
        </Grid.Column>        
      </Grid>
      
      <Segment basic>
        <SinglePlaceAccordion place={place}/>  
        <Divider hidden/>
        <Button basic icon labelPosition="left"       
          href={`https://www.google.com/maps/search/?api=1&query=${place.name}`} >
            <Icon as={Image}  src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/128/maps-icon.png" />
            Näytä Google Mapsissa
        </Button>    
      </Segment>      
    </Segment>

    <Segment textAlign="center" color="olive">         
      <CommentBox place={place} />          
    </Segment>
    
    <Segment>
      <Header as="h3">
        Vaihtoehtoja lähellä paikkaa {place.name} (max {MAX_DIST_FOR_NEARBY_PLACES} km)
      </Header>
      <PlacesList places={nearByPlaces} />
    </Segment>
    </div>  
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    nearByPlaces: nearbyPlacesSelector(ownProps.place, state.places.data, MAX_DIST_FOR_NEARBY_PLACES)
  }
}

export default connect(mapStateToProps)(SinglePlacePage);