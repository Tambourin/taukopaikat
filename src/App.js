import React, { useEffect } from "react";
import { connect } from "react-redux";
import PlacesList from "./components/PlacesList";
import SearchBox from "./components/SearchBox";
import Intro from "./components/Intro/Intro";
import { Container } from "semantic-ui-react";
import { initializePlaces } from "./reducers/placesReducer";
import { initializeVotes } from "./reducers/votesReducer";

const App = ({ initializePlaces, initializeVotes }) => {
  useEffect(() => {   
    initializePlaces();    
  }, [initializePlaces]);

  useEffect(() => {    
    initializeVotes();    
  }, [initializeVotes]);
 
  return (
    <Container>
      <Intro />
      <SearchBox />   
      <PlacesList />   
    </Container>
  );
};

export default connect(null, { initializePlaces, initializeVotes })(App);
