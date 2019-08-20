import React from "react";
import { connect } from "react-redux";
import { Checkbox, Segment, Dropdown } from "semantic-ui-react";
import { setHighway } from "../reducers/filterReducer";

const highwayOptions = [
  { value: "all", text:"Kaikki" },
  { value: "1", text:"1", image: { avatar: true, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Route_E75-FIN.png/970px-Route_E75-FIN.png" }},
  { value: "2", text:"2" },
  { value: "3", text:"3" },
  { value: "4", text:"4" },
  { value: "5", text:"5" }
]

const SearchBox = ({ setHighway, filter }) => {   
  return (
    <Segment>
      Valtatie
      <Dropdown        
        fluid
        selection
        options={highwayOptions}
        value={filter.highway}
        onChange={(event, data) => setHighway(data.value)}
      />
      
      <Segment>
        Näiden pitää toteutua
        <Checkbox label="Ei kuulu ketjuun" /> 
        <Checkbox label="Auki 24 h" /> 
        <Checkbox label="Leikkipaikka" />
      </Segment>
    </Segment>      
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps, { setHighway })(SearchBox);