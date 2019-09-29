import React from "react";
import { connect } from "react-redux";
import { Segment, Label, Grid } from "semantic-ui-react";
import { setPercentageOfPlacesToView } from "../../reducers/viewOptionsReducer";


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
          <Label color="olive" pointing="right" basic >Parhaat</Label>
        </Grid.Column>
        <Grid.Column width={8} style={centerStyle}>
          <input
            style={inputStyle}
            type="range"
            min={1}
            max={100}            
            value={percentageOfPlacesToView}
            onChange={(event) => setPercentageOfPlacesToView(event.target.value)}
          />
        </Grid.Column>
        <Grid.Column textAlign='center'>
        <Label pointing="left" basic >Kaikki</Label>
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
