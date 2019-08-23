import React from "react";
import { connect } from "react-redux";
import { Checkbox, Segment, Dropdown, Grid } from "semantic-ui-react";
import { 
  setHighway, 
  setDoesNotBelongToChain,
  setIsOpenTwentyFourHours,
  setHasPlayground,
  setHasRestaurant,
  setHasCoffee,
  setIsAttraction } from "../reducers/filterReducer";

const highwayOptions = [
  { value: "all", text:"Kaikki" },
  { value: "1", text:"1" },
  { value: "2", text:"2" },
  { value: "3", text:"3" },
  { value: "4", text:"4" },
  { value: "5", text:"5" }
]

const SearchBox = ({ setHighway, filter, ...props }) => {   
  console.log("SEtHighWay:", setHighway);
  return (
    <Segment raised>
      Valtatie
      <Dropdown        
        fluid
        selection
        options={highwayOptions}
        value={filter.highway}
        onChange={(event, data) => setHighway(data.value)}
      />
      
      <Segment>
        Näiden pitää toteutua:
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Checkbox 
                label="Ei kuulu ketjuun"
                checked={filter.doesNotBelongToChain}
                onClick={props.setDoesNotBelongToChain} />
            </Grid.Column>
            <Grid.Column>
              <Checkbox 
                label="Auki 24 h"
                checked={filter.isOpenTwentyFourHours}
                onClick={props.setIsOpenTwentyFourHours} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Checkbox 
                label="Leikkipaikka"
                checked={filter.hasPlayground}
                onClick={props.setHasPlayground} />
            </Grid.Column>
            <Grid.Column>
            <Checkbox 
              label="Ravintola" 
              checked={filter.hasRestaurant}
              onClick={props.setHasRestaurant}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Checkbox 
                label="Kahvila" 
                checked={filter.hasCoffee}
                onClick={props.setHasCoffee}/>
            </Grid.Column>
            <Grid.Column>
              <Checkbox 
                label="Nähtävyys"
                checked={filter.isAttraction}
                onClick={props.setIsAttraction} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Segment>      
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps, { 
  setHighway, 
  setDoesNotBelongToChain,
  setIsOpenTwentyFourHours,
  setHasPlayground,
  setHasRestaurant,
  setHasCoffee,
  setIsAttraction
})(SearchBox);