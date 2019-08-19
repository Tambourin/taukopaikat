import React, { useState, useEffect } from "react";
import placesService from "./services/placesService";
import PlacesList from "./components/PlacesList";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [ places, setPlaces ] = useState([]);
  const [ filter, setFilter ] = useState({
    highway: "4",
    doesNotBelongToChain: false,
    isOpenTwentyFourHours: false
  });

  useEffect(() => {    
    placesService.getAll().then(results => {
      setPlaces(results);      
    });
  }, []);

  return (
    <div>
      <SearchBox filter={filter} setFilter={setFilter} />
      <PlacesList places={places} filter={filter} />
    </div>
  );
};

export default App;
