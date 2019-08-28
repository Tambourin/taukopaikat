import React, { useState } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { Segment } from "semantic-ui-react";

const style = {
  height: "60vh"
}

const mapStyle = {
  height: "96%",
  width: "96%",
  position: "relative"
}

const PlacesMap = (props) => {
  const [ activeMarker, setActiveMarker ] = useState(null);  
  const [ showInfoWindow, setShowInfoWindow ] = useState(false);  

  const onMarkerClick = (props, marker, e) => {
    setActiveMarker(marker);
    setShowInfoWindow(true);
  }

  const closeInfoWindow = () => {
    setActiveMarker(null);
    setShowInfoWindow(false);
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
        
        <InfoWindow 
            marker={activeMarker}
            visible={showInfoWindow}
            onClose={closeInfoWindow}
          >
          {
            activeMarker ? (
              <div>
                {activeMarker.title} <br />
                <a href={`https://www.google.com/maps/search/${activeMarker.title}`}>Hae Google Mapsista</a>
                <button>Lisää</button>
              </div>
            ) : <div></div>
          }        
        </InfoWindow>
      </Map>  
    </Segment>   
  );
};

export default GoogleApiWrapper({ 
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  language: "fi",
  region: "fi" 
})(PlacesMap);