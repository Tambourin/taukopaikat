import React from "react";
import { Container } from "semantic-ui-react";
import SearchBox from "../components/filter/SearchBox";
import PlacesView from "../components/placesView/PlacesView";
import Heading from "../components/Heading";
import Latest from "../components/Latest";

const MainPage = () => {
  return (
    <div>
      <Heading />
      
      <Container>     
        <SearchBox />       
        <PlacesView />
      </Container>
      <Latest />
    </div>
  );
}

export default MainPage;