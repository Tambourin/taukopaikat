import React, { useState } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { Segment, Image, Button, Icon } from "semantic-ui-react";

const ZOOM_LEVEL = 5;

const style = {
  height: "60vh"
}

const mapStyle = {
  height: "96%",
  width: "96%"  
}

const PlacesMap = (props) => {
  const [ activeMarker, setActiveMarker ] = useState(null);  
  const [ infoWindowIsVisible, setinfoWindowIsVisible ] = useState(false);
  const [ currentPosition, setCurrentPosition ] = useState(null);  

const showOwnPosition = () => {
  if (currentPosition) {
    setCurrentPosition(null);
    return;
  }
  navigator.geolocation.getCurrentPosition((position) => {
    setCurrentPosition({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });              
  });
}

const onMarkerClick = (props, marker, e) => {
    setActiveMarker(marker);
    setinfoWindowIsVisible(true);
  }

  const closeInfoWindow = () => {
    setActiveMarker(null);
    setinfoWindowIsVisible(false);
  } 

  const infoWindow = () => {
    return (
      <InfoWindow 
            marker={activeMarker}
            visible={infoWindowIsVisible}
            onClose={closeInfoWindow}
          >
          {
            activeMarker ? (
              <div>
                <h4>{activeMarker.title}</h4>
                <Image size="tiny" alt="place" src={activeMarker.image} />
                <a href={`/places/${activeMarker.id}`}>Avaa</a> <br />
                {activeMarker.address}               
              </div>
            ) : <div></div>
          }        
        </InfoWindow>
    )
  }

  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  const mapPlacesToMarkers = (places) => {    
    return places.map(place => {      
      return (
        <Marker 
          key={place.id}
          position={place.coordinates}
          title={place.name}
          address={place.address}
          image={place.images[0]}
          id={place.id}
          icon={image}                    
          onClick={onMarkerClick} />
      );
    });
  };
  
  return (
    <Segment.Group>
      <Segment style={style}>
        <Map 
          google={props.google}
          style={mapStyle}        
          zoom={ZOOM_LEVEL}
          initialCenter={
            props.places[0] ? props.places[0].coordinates : {
              "lat": 62.517555,
              "lng": 25.691022
            }
          }
          mapTypeControl={false}
          streetViewControl={false}
        >                   
          {mapPlacesToMarkers(props.places)}
          {currentPosition ? <Marker position={currentPosition} /> : null}      
          {infoWindow()}               
        </Map>          
      </Segment> 
      <Segment>
        <Button 
          icon
          toggle           
          fluid
          color="olive" 
          onClick={showOwnPosition}>
          <Icon name="map marker alternate" /> 
          {currentPosition ? "Piilota oma sijainti" : "Näytä oma sijainti"}
        </Button>
      </Segment>  
    </Segment.Group>
  );
};

export default GoogleApiWrapper({ 
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  language: "fi",
  region: "fi" 
})(PlacesMap);