export const placeWithMostVotes = places => {
  return places.reduce((placeWithMostVotes, currentPlace) => {
    if (currentPlace.votes > placeWithMostVotes.votes) {
      return currentPlace;
    }
    return placeWithMostVotes;
  });
};

export const orderByVotes = places => {
  return [...places].sort((place1, place2) => place2.votes - place1.votes);
};

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
