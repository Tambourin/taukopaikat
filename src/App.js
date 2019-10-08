import React, { useEffect } from "react";
import { connect } from "react-redux";

import { initializePlaces } from "./reducers/placesReducer";
import { initializeVotes } from "./reducers/votesReducer";
import { BrowserRouter, Route } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import MainPage from "./pages/MainPage";
import SinglePlacePage from "./pages/SinglePlacePage";
import EditPage from "./pages/EditPage";
import Footer from "./components/Footer";

const App = ({ initializePlaces, initializeVotes, places }) => {
  useEffect(() => {   
    initializePlaces();  
  }, [initializePlaces]);

  useEffect(() => {    
    initializeVotes();    
  }, [initializeVotes]);
 
  return (
    <div>
    <BrowserRouter>
      <HeaderMenu />      
        <Route exact path="/" render={() => <MainPage />}/>
        <Route exact path="/edit" render={() => <EditPage />}/>
        <Route exact path="/:id" render={({ match }) => 
          <SinglePlacePage id={match.params.id} place={
            places.find(place => place.id === match.params.id)}
          />
        }/>
      <Footer />     
    </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.places.data
  }
}

export default connect(mapStateToProps, { initializePlaces, initializeVotes })(App);
