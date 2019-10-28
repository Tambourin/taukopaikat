import React from "react";
import { connect } from "react-redux";
import { Segment, Grid } from "semantic-ui-react";
import ChooseServices from "./ChooseServices";
import ChooseViewAsListOrMap from "./ChooseViewAsListOrMap";
import ChooseHighWay from "./ChooseHighWay";
import SearchWordInput from "./SearchWordInput";
import { 
  setHighway, 
  setDoesNotBelongToChain,
  setIsOpenTwentyFourHours,
  setHasBeenAvarded,
  setIsAttraction,
  setIsSummerCafe,
  setIsGasStation,
  setIsGrill } from "../../reducers/filterReducer";
import {showAsList, showOnMap } from "../../reducers/viewOptionsReducer";

const SearchBox = ({ setHighway, filter, viewOptions, ...props }) => {    
  return (
    <Segment raised color="olive">     
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            Valtatie
            <ChooseHighWay highway={filter.highway} setHighway={setHighway} />
          </Grid.Column>
          <Grid.Column>            
            Hakusana
            <SearchWordInput />
          </Grid.Column>
        </Grid.Row>
      </Grid>   
      
      <ChooseServices 
        filter={filter}
        setDoesNotBelongToChain={props.setDoesNotBelongToChain}
        setIsOpenTwentyFourHours={props.setIsOpenTwentyFourHours}
        setHasBeenAvarded={props.setHasBeenAvarded}
        setIsAttraction={props.setIsAttraction}
        setIsSummerCafe={props.setIsSummerCafe}
        setIsGasStation={props.setIsGasStation}
        setIsGrill={props.setIsGrill} 
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
  setHasBeenAvarded,
  setIsAttraction,
  setIsSummerCafe,
  setIsGasStation,
  setIsGrill,
  showAsList,
  showOnMap
})(SearchBox);