import React from "react";
import { connect } from "react-redux";
import { Checkbox, Segment, Dropdown, Grid } from "semantic-ui-react";
import { setHighway, setDoesNotBelongToChain } from "../reducers/filterReducer";

const highwayOptions = [
  { value: "all", text:"Kaikki" },
  { value: "1", text:"1" },
  { value: "2", text:"2" },
  { value: "3", text:"3" },
  { value: "4", text:"4" },
  { value: "5", text:"5" }
]

const SearchBox = ({ setHighway, setDoesNotBelongToChain, filter }) => {   
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
                onClick={setDoesNotBelongToChain} />
            </Grid.Column>
            <Grid.Column>
              <Checkbox label="Auki 24 h" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Checkbox label="Leikkipaikka" />
            </Grid.Column>
            <Grid.Column>
            <Checkbox label="Ravintola" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Checkbox label="Kahvila" />
            </Grid.Column>
            <Grid.Column>
              <Checkbox label="Nähtävyys" />
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

export default connect(mapStateToProps, { setHighway, setDoesNotBelongToChain })(SearchBox);