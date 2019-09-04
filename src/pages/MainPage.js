import React from "react";
import SearchBox from "../components/SearchBox";
import PlacesView from "../components/PlacesView";

const MainPage = () => {
  return (
    <div>
      <SearchBox />       
      <PlacesView />
    </div>
  );
}

export default MainPage;