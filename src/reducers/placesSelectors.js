import { arrangeOptions } from "./viewOptionsReducer";

export const placeWithMostVotes = places => {
  return places.reduce((placeWithMostVotes, currentPlace) => {
    if (currentPlace.votes > placeWithMostVotes.votes) {
      return currentPlace;
    }
    return placeWithMostVotes;
  });
};

export const orderPlaces = (places, orderBy) => {
  switch (orderBy) {
    case arrangeOptions.VOTES:
        return [...places].sort((place1, place2) => place2.votes - place1.votes); 
    case arrangeOptions.APLHABETIC:
        return [...places].sort((place1, place2) => { 
          return place1.name > place2.name ? 1 : -1;
        });
    case arrangeOptions.NORTH_TO_SOUTH:
        return [...places].sort((place1, place2) => 
          place2.coordinates.lat - place1.coordinates.lat);
    case arrangeOptions.SOUTH_TO_NORT:
      return [...places].sort((place1, place2) => 
        place1.coordinates.lat - place2.coordinates.lat);
    default:
      break;
  }
}

const getDistance = (lat1, lon1, lat2, lon2)  => {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;
  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

export const nearbyPlacesSelector = (place, places, maxDistance) => {
  if(!places || !place) {
    return null;    
  }  
  return places.filter(p => {
    if (!p.coordinates || !place.coordinates) {
      return null;
    }
    const dist = getDistance(
      place.coordinates.lat, 
      place.coordinates.lng, 
      p.coordinates.lat, 
      p.coordinates.lng);
    return dist < maxDistance && dist !== 0;
    });
}

export const limitNumberOfPlacesByPercent = (places, percentage) => {
  const numberOfElementsToGet = Math.ceil(percentage / 100 * places.length);
  return [...places].slice(0, numberOfElementsToGet);
}

export const limitNumberOfPlacesByNumber = (places, numberofPlaces) => {  
  return [...places].slice(0, numberofPlaces);
}

export const getFilteredPlaces = (places, filter) => {
  const placesFilter = place => {
    if (
      (filter.highway !== place.highway && filter.highway !== "all") ||
      (filter.doesNotBelongToChain === true &&
        place.services.doesNotBelongToChain === false) ||
      (filter.isOpenTwentyFourHours === true &&
        place.services.isOpenTwentyFourHours === false) ||
      (filter.hasPlayground === true &&
        place.services.hasPlayground === false) ||
      (filter.hasRestaurant === true &&
        place.services.hasRestaurant === false) ||
      (filter.hasCofee === true && place.services.hasCofee === false) ||
      (filter.isAttraction === true && place.services.isAttraction === false)
    ) {
      return false;
    }

    if(filter.searchWord) {
      const searchWord = filter.searchWord.toLowerCase();
      const placeName = place.name.toLowerCase();
      if (!placeName.includes(searchWord)) {
        return false;
      }
      if (place.city) {
        const city = place.city.toLowerCase();
        if(!city.includes(searchWord)) {
          return false;
        }
      }      
    }
    return true;
  };

  return places.filter(place => placesFilter(place));
};
