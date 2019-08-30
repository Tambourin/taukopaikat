import React, { useState } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { Segment, Image } from "semantic-ui-react";

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
                <a href={`/api/places/${activeMarker.id}`}>Avaa</a> <br />
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
    <Segment style={style}>
      <Map 
        google={props.google}
        style={mapStyle}        
        zoom={6}
        initialCenter={{
          lat: 62.121800,
          lng: 25.540209
        }}
        mapTypeControl={false}
        streetViewControl={false}
      >             
      
        {mapPlacesToMarkers(props.places)}
        {infoWindow()}
        
      </Map>  
    </Segment>   
  );
};

export default GoogleApiWrapper({ 
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  language: "fi",
  region: "fi" 
})(PlacesMap);