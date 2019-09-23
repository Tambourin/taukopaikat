import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { initializePlaces } from "./reducers/placesReducer";
import { initializeVotes } from "./reducers/votesReducer";
import { BrowserRouter, Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import HeaderMenu from "./components/HeaderMenu";
import MainPage from "./pages/MainPage";
import SinglePlacePage from "./pages/SinglePlacePage";
import EditPage from "./pages/EditPage";

const App = ({ initializePlaces, initializeVotes, places }) => {
  useEffect(() => {   
    initializePlaces();    
  }, [initializePlaces]);

  useEffect(() => {    
    initializeVotes();    
  }, [initializeVotes]);
 
  return (
    <>
    <BrowserRouter>
      <HeaderMenu />
      <Container>
          <Intro />
          <Route exact path="/" render={() => <MainPage />}/>
          <Route path="/edit" render={() => <EditPage />}/>
          <Route exact path="/:id" render={({ match }) => 
            <SinglePlacePage place={
              places.find(place => place.id === match.params.id)}
            />
          }/>      
      </Container>
    </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.places.data
  }
}

export default connect(mapStateToProps, { initializePlaces, initializeVotes })(App);
