import React from "react";
import { Image } from "semantic-ui-react";
import { BASE_IMAGE_URL } from "../constants/constants";

const SinglePlaceImage = ({ imageId, googleImageId, height }) => {
  const imageStyle = {
    height: `${height}px`, 
    width: "100%", 
    objectFit: "cover", 
    objectPosition: "center"
  }

  if(imageId) {
    return (
      <Image
        style={imageStyle}             
        src={`${BASE_IMAGE_URL}c_fill,w_700/${imageId}`} alt="Pääkuva taukopaikasta" />
    )
  } else if(googleImageId){
    return (
        <Image
          style={imageStyle}               
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=700&photoreference=${googleImageId}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`} alt="Pääkuva taukopaikasta" />
    )
  } else {
    return <Image 
    centered
    style={imageStyle}    
    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw5WrlkUQT9BMeXPL4NVAwuD1n9hqczs__ff8Uv8XJnPfau98e`} alt="Pääkuva taukopaikasta ei löytynyt" />

    
  }  
}

export default SinglePlaceImage;