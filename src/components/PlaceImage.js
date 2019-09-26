import React from "react";
import { Image } from "semantic-ui-react";
import { BASE_IMAGE_URL } from "../constants/constants";

const SinglePlaceImage = ({ imageId, googleImageId }) => {
  if(imageId) {
    return (
      <Image
        centered    
        src={`${BASE_IMAGE_URL}c_fill,w_700/${imageId}`} alt="Pääkuva taukopaikasta" />
    )
  } else if(googleImageId){
    return (
      <Image 
        centered    
        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=700&photoreference=${googleImageId}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`} alt="Pääkuva taukopaikasta" />
    )
  } else {
    return null;
  }  
}

export default SinglePlaceImage;