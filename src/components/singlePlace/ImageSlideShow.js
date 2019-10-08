import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import PlaceImage from "../PlaceImage";

const IMAGE_HEIGHT = 320;

const buttonStyle = {
  position: "absolute",
  top: "50%"
};

const leftButtonStyle = {
  ...buttonStyle,
  left: "4px"
};

const rightButtonStyle = {
  ...buttonStyle,
  right: "4px"
};

const ImageSlideShow = ({ images, googleImageId }) => {
  const [index, setIndex] = useState(0);
 
  const handleNextImage = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePreviousImage = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div>      
      <PlaceImage imageId={images[index]} googleImageId={googleImageId} height={IMAGE_HEIGHT} />      
      {index > 0 ? (
        <Button
          circular
          icon="arrow left"
          style={leftButtonStyle}
          onClick={handlePreviousImage}
        ></Button>
      ) : null}
      {index < images.length - 1 ? (
        <Button
          circular
          icon="arrow right"
          style={rightButtonStyle}
          onClick={handleNextImage}
        ></Button>
      ) : null}
      <p>Kuva: {index + 1} / {images.length}</p>
    </div>
  );
};

export default ImageSlideShow;
