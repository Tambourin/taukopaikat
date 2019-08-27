import React from "react";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import ChooseServices from "./ChooseServices";
import ChooseViewAsListOrMap from "./ChooseViewAsListOrMap";
import ChooseHighWay from "./ChooseHighWay";
import { 
  setHighway, 
  setDoesNotBelongToChain,
  setIsOpenTwentyFourHours,
  setHasPlayground,
  setHasRestaurant,
  setHasCoffee,
  setIsAttraction } from "../reducers/filterReducer";
import {showAsList, showOnMap } from "../reducers/viewOptionsReducer";

const SearchBox = ({ setHighway, filter, viewOptions, ...props }) => {    
  return (
    <Segment raised color="yellow" >      
      <ChooseHighWay highway={filter.highway} setHighway={setHighway} />
      <ChooseServices 
        filter={filter}
        setDoesNotBelongToChain={props.setDoesNotBelongToChain}
        setIsOpenTwentyFourHours={props.setIsOpenTwentyFourHours}
        setHasPlayground={props.setHasPlayground}
        setHasRestaurant={props.setHasRestaurant}
        setHasCoffee={props.setHasCoffee}
        setIsAttraction={props.setIsAttraction} 
      />
      <ChooseViewAsListOrMap 
        viewOptions={viewOptions} 
        showAsList={props.showAsList}
        showOnMap={props.showOnMap}/> 
    </Segment>      
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    viewOptions: state.viewOptions   
  }
}

export default connect(mapStateToProps, { 
  setHighway, 
  setDoesNotBelongToChain,
  setIsOpenTwentyFourHours,
  setHasPlayground,
  setHasRestaurant,
  setHasCoffee,
  setIsAttraction,
  showAsList,
  showOnMap
})(SearchBox);