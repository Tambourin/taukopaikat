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
    default:
      break;
  }
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
    return true;
  };
  return places.filter(place => placesFilter(place));
};
