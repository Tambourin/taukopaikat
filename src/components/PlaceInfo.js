import React from "react";
import { InfoWindow } from "google-maps-react";

const PlaceInfo = ({ activeMarker, showInfoWindow, closeInfoWindow }) => {
  if (!activeMarker) {
    console.log("Ei markeria");
    return null;
  } 
  console.log(activeMarker);
  return (  
    <div>  
    <InfoWindow 
          marker={activeMarker}
          visible={showInfoWindow}
          onClose={closeInfoWindow}
        >
          <div>
            xxxx
            <br />
            
          </div>
      </InfoWindow>
      ssss
      </div>
  );
};

export default PlaceInfo;