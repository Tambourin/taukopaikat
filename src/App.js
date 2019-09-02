import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { initializePlaces } from "./reducers/placesReducer";
import { initializeVotes } from "./reducers/votesReducer";
import { BrowserRouter, Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import MainPage from "./pages/MainPage";
import SinglePlacePage from "./pages/SinglePlacePage";

const App = ({ initializePlaces, initializeVotes, places }) => {
  useEffect(() => {   
    initializePlaces();    
  }, [initializePlaces]);

  useEffect(() => {    
    initializeVotes();    
  }, [initializeVotes]);
 
  return (
    <Container>
      <BrowserRouter>
        <Intro />
        <Route exact path="/" render={() => <MainPage />}/>
        <Route exact path="/:id" render={({ match }) => 
          <SinglePlacePage place={
            places.find(place => place.id === Number(match.params.id))}/>
        }/>
      </BrowserRouter>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.places.data
  }
}

export default connect(mapStateToProps, { initializePlaces, initializeVotes })(App);
