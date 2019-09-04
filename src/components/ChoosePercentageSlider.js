import React from "react";
import { connect } from "react-redux";
import { Segment, Label, Button, Grid } from "semantic-ui-react";
import { setPercentageOfPlacesToView } from "../reducers/viewOptionsReducer";


const inputStyle = {  
  width: "100%",
  margin: "auto"  
}

const centerStyle = {
  display: "flex",
  alignItems: "center"
}

const ChoosePercentageSlider = ({ percentageOfPlacesToView, setPercentageOfPlacesToView }) => {  
  return (
    <Segment>
      
      <Grid columns='equal' >
        <Grid.Column textAlign='center'>
          <Label basic >Parhaat</Label>
        </Grid.Column>
        <Grid.Column width={9} style={centerStyle}>
          <input
            style={inputStyle}
            type="range"
            min={1}
            max={100}
            step="2"
            value={percentageOfPlacesToView}
            onChange={(event) => setPercentageOfPlacesToView(event.target.value)}
          />
        </Grid.Column>
        <Grid.Column textAlign='center'>
        <Label basic color="olive">Kaikki</Label>
        </Grid.Column>      
      </Grid>
    </Segment>
  );
};

const mapsStateToProps = state => {
  return {
    percentageOfPlacesToView: state.viewOptions.percentageOfPlacesToView
  };
};

export default connect(
  mapsStateToProps,
  { setPercentageOfPlacesToView }
)(ChoosePercentageSlider);
