import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initializePlaces } from "./reducers/placesReducer";
import { initializeVotes } from "./reducers/votesReducer";
import { BrowserRouter, Route } from "react-router-dom";
import { initializeAuth, login, logout } from "./reducers/userReducer";
import HeaderMenu from "./components/HeaderMenu";
import MainPage from "./pages/MainPage";
import SinglePlacePage from "./pages/SinglePlacePage";
import EditPage from "./pages/EditPage";
import Footer from "./components/Footer";
import RedirectPage from "./pages/RedirectPage";

const App = ({ initializePlaces, initializeVotes, initializeAuth, places, isAuthenticated }) => {

  useEffect(() => {
    initializeAuth();    
  }, [initializeAuth]);

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
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/redirect" render={() => <RedirectPage />} />
        <Route
          exact
          path="/edit/:id"
          render={isAuthenticated ? ({ match }) => (
            <EditPage
              place={places.find(place => place.id === match.params.id)}
            />
          ) : null }
        />
        <Route
          exact
          path="/places/:id"
          render={({ match }) => (
            <SinglePlacePage
              id={match.params.id}
              place={places.find(place => place.id === match.params.id)}
            />
          )}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = state => {
  return {
    places: state.places.data,
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user
  };
};

export default connect(
  mapStateToProps,
  { initializePlaces, initializeVotes, initializeAuth, login, logout }
)(App);
