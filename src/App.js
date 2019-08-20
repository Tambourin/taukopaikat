import React, { useEffect } from "react";
import { connect } from "react-redux";
import PlacesList from "./components/PlacesList";
import SearchBox from "./components/SearchBox";
import { Container } from "semantic-ui-react";
import { initializePlaces } from "./reducers/placesReducer";


const App = ({ initializePlaces, places }) => {

  useEffect(() => {    
    initializePlaces();    
  }, [initializePlaces]);
 
  return (
    <Container>
      <SearchBox />   
      <PlacesList />   
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.places
  }
}

export default connect(mapStateToProps, { initializePlaces })(App);
