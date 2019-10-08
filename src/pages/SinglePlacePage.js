import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Segment, Header, Container } from "semantic-ui-react";
import { initActiveGoogleData } from "../reducers/activeGoogleDataReducer";
import RoadNumber from "../components/RoadNumber";
import VoteButton from "../components/VoteButton";
import SinglePlaceAccordion from "../components/singlePlace/SinglePlaceAccordion";
import CommentBox from "../components/singlePlace/CommentBox";
import ImageSlideShow from "../components/singlePlace/ImageSlideShow";
import NearByPlaces from "../components/singlePlace/NearByPlaces";
import ShowOnGoogleMapsButton from "../components/ShowOnGoogleMapsButton";
import RatingsGroup from "../components/RatingsGroup";
import OpenToday from "../components/singlePlace/OpenToday";
import AddImage from "../components/AddImage";

const SinglePlacePage = ({ id, place, activeGoogleData, initActiveGoogleData, isLoading, loadingErrored }) => {
  useEffect(() => {
      window.scrollTo(0, 0); // Always scroll to top when page is loaded      
      initActiveGoogleData(id);      
  }, [initActiveGoogleData, id]); 
  
  

  if(loadingErrored) {
    return (
      <Segment>
        <p>Tietojen lataus epäonnistui</p>
      </Segment>
    );
  }

  if(isLoading || !place || !activeGoogleData) {
    return (
      <Segment placeholder loading />
    );    
  }    
  
  console.log("activeGoogleData", activeGoogleData);
  console.log("place ", place);

  return ( 
    <Container> 
      <Segment  basic vertical style={{ marginTop: "10px" }} textAlign="center" >
        <RoadNumber roadNumber={place.highway} />
        <Header  as="h2" style={{ fontSize: "3.0em" }} color="olive">{place.name.toUpperCase()}</Header>
        <Header color="yellow">{place.city}</Header>
        <OpenToday openingHours={activeGoogleData.openingHours} />
      </Segment >
           
      <Segment vertical textAlign="center">        
        <ImageSlideShow images={place.images} googleImageId={place.googleImage}/>        
        <AddImage place={place}/>
      </Segment>

      <Segment padded vertical textAlign="center" color="olive">
        {place.description ? <div>{place.description}</div> : null }
      </Segment>

      <Segment padded vertical textAlign="center">
        <RatingsGroup votes={place.votes} googleRating={activeGoogleData.googleRating} />
        <VoteButton place={place}/> 
      </Segment>

      <Segment padded vertical textAlign="center" color="olive">
        <SinglePlaceAccordion place={place} activeGoogleData={activeGoogleData} openingHours={activeGoogleData.openingHours}/> 
      </Segment>

      <Segment padded vertical textAlign="center" color="olive">         
        <CommentBox place={place} />         
      </Segment>
      
      <Segment padded vertical color="grey">      
        <NearByPlaces place={place} />
      </Segment>

      <Segment padded vertical textAlign="center">
        <ShowOnGoogleMapsButton placeName={place.name} />
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