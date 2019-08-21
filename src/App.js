import React, { useEffect } from "react";
import { connect } from "react-redux";
import PlacesList from "./components/PlacesList";
import SearchBox from "./components/SearchBox";
import Intro from "./components/Intro";
import { Container } from "semantic-ui-react";
import { initializePlaces } from "./reducers/placesReducer";

const App = ({ initializePlaces }) => {
  useEffect(() => {    
    initializePlaces();    
  }, [initializePlaces]);
 
  return (
    <Container>
      <Intro />
      <SearchBox />   
      <PlacesList />   
    </Container>
  );
};

export default connect(null, { initializePlaces })(App);
