import React from "react";

const PlaceCard = ({ place }) => {
  return (
    <div>
      <div>{place.name}{place.highway}</div>
      {
        place.images.length > 0 ? (<img src={place.images[0]} alt="kuva taukopaikasta" />) : 
        (<img src="https://static.thenounproject.com/png/340719-200.png" alt="Kuvaa ei saatavilla" />) 
      }
      <div>
        <button>Äänestä parhaaksi</button>
      </div>       
    </div>
  )
}

export default PlaceCard;