import React from "react";
import { Responsive, Grid } from "semantic-ui-react";

const style = {
  marginTop: "20px", 
  marginBottom: "0px",  
  backgroundColor:"rgba(0,0,0,0.5)"
}

const Latest = () => {
  return (
    <div>    
      <Responsive as={Grid} columns={3} textAlign="center" style={style} minWidth={Responsive.onlyTablet.minWidth}>       
        <Grid.Column>Viimeksi äänestetty: ABC Hirvaskangas</Grid.Column>
        <Grid.Column>Viimeksi kommentoitu: ABC Hirvaskangas</Grid.Column>
        <Grid.Column>Kaikista paras: ABC Hirvaskangas</Grid.Column>          
      </Responsive>
    </div>
  );
};

export default Latest;