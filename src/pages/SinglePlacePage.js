import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Segment, Header, Image, Divider, Button, Label, Icon, Grid, Loader } from "semantic-ui-react";
import RoadNumber from "../components/RoadNumber";
import VoteButton from "../components/VoteButton";
import SinglePlaceAccordion from "../components/SinglePlaceAccordion";
import CommentBox from "../components/CommentBox";
import PlacesList from "../components/PlacesList";
import PlaceImage from "../components/PlaceImage";
import { nearbyPlacesSelector } from "../reducers/placesSelectors";
import { initActiveGoogleData } from "../reducers/activeGoogleDataReducer";

const MAX_DIST_FOR_NEARBY_PLACES = 20;

const SinglePlacePage = ({ id, place, nearByPlaces, activeGoogleData, initActiveGoogleData, isLoading, loadingErrored }) => {
 
  useEffect(() => {  
    initActiveGoogleData(id);
  }, [place, initActiveGoogleData, id]); 
  
  if(isLoading || !place) {
    return (
      <Segment>
        <Loader active/>
      </Segment>
    );    
  }    
  
  if(loadingErrored) {
    return (
      <Segment>
        <p>Tietojen lataus epäonnistui</p>
      </Segment>
    );
  }

  const fullPlaceData = activeGoogleData;

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
          <PlaceImage imageId={place.images[0]} googleImageId={fullPlaceData.googleImage}/>        
        </Grid.Column>
        <Grid.Column>
          {fullPlaceData.address ? <p>{fullPlaceData.address}, {fullPlaceData.city}</p> : null}
          <Icon name="world" />
          <a href={fullPlaceData.www}>Verkkosivu</a>       
          {place.description 
            ? <Segment basic secondary>
              {place.description}
            </Segment>
          : null }
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
                <Label.Detail>{fullPlaceData.googleRating}</Label.Detail>
              </Label>
            </Label.Group>      
            <VoteButton place={place}/>
          </Segment>
        </Grid.Column>        
      </Grid>
      
      <Segment basic>
        <SinglePlaceAccordion place={place} openingHours={fullPlaceData.openingHours}/>  
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
    activeGoogleData: state.activeGoogleData.data,
    nearByPlaces: nearbyPlacesSelector(ownProps.place, state.places.data, MAX_DIST_FOR_NEARBY_PLACES),
    isLoading: state.activeGoogleData.isLoading,
    loadingErrored: state.activeGoogleData.loadingErrored    
  }
}

export default connect(mapStateToProps, { initActiveGoogleData })(SinglePlacePage);