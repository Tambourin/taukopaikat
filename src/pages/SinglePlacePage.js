import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Segment, Header, Image, Divider, Button, Label, Icon, Grid, Container } from "semantic-ui-react";
import RoadNumber from "../components/RoadNumber";
import VoteButton from "../components/VoteButton";
import SinglePlaceAccordion from "../components/singlePlace/SinglePlaceAccordion";
import CommentBox from "../components/singlePlace/CommentBox";
import PlaceImage from "../components/PlaceImage";
import NearByPlaces from "../components/singlePlace/NearByPlaces";
import ShowOnGoogleMapsButton from "../components/ShowOnGoogleMapsButton";
import RatingsGroup from "../components/RatingsGroup";
import { initActiveGoogleData } from "../reducers/activeGoogleDataReducer";


const SinglePlacePage = ({ id, place, activeGoogleData, initActiveGoogleData, isLoading, loadingErrored }) => {
  useEffect(() => {  
    initActiveGoogleData(id);
  }, [initActiveGoogleData, id]); 
  
  if(isLoading || !place || !activeGoogleData) {
    return (
      <Segment placeholder loading />
    );    
  }    
  
  if(loadingErrored) {
    return (
      <Segment>
        <p>Tietojen lataus epäonnistui</p>
      </Segment>
    );
  }

  console.log("activeGoogleData", activeGoogleData);
  console.log("place ", place);

  window.scrollTo(0, 0); // Always scroll to top when page is loaded
  
  return ( 
    <Container> 
    <Segment style={{ marginTop: "10px" }} textAlign="center" color="olive">
      <RoadNumber roadNumber={place.highway} />
      <Header  as="h2" style={{ fontSize: "3.0em" }} color="olive">{place.name.toUpperCase()}</Header>
      <Header color="yellow">{place.city}</Header>      
      <b>Auki tänään:</b>      
      <Divider />
      <Grid doubling columns={2}>
        <Grid.Column>
          <PlaceImage imageId={place.images[0]} googleImageId={place.googleImage}/>        
        </Grid.Column>
        <Grid.Column>
          {activeGoogleData.address ? <p>{activeGoogleData.address}, {activeGoogleData.city}</p> : null}
          <Icon name="world" />
          <a href={activeGoogleData.www}>Verkkosivu</a>       
          {place.description 
            ? <Segment basic secondary>
              {place.description}
            </Segment>
          : null }
                       
            <RatingsGroup votes={place.votes} googleRating={activeGoogleData.googleRating} />
            <VoteButton place={place}/>
          
        </Grid.Column>        
      </Grid>
      
      <Segment basic>
        <SinglePlaceAccordion place={place} openingHours={activeGoogleData.openingHours}/>  
        <Divider hidden/>          
        <ShowOnGoogleMapsButton placeName={place.name} />
      </Segment>      
    </Segment>

    <Segment textAlign="center" color="olive">         
      <CommentBox place={place} />         
    </Segment>
    
    <Segment>      
      <NearByPlaces place={place} />
    </Segment>
    </Container>  
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeGoogleData: state.activeGoogleData.data,    
    isLoading: state.activeGoogleData.isLoading,
    loadingErrored: state.activeGoogleData.loadingErrored    
  }
}

export default connect(mapStateToProps, { initActiveGoogleData })(SinglePlacePage);