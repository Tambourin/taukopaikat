import React from "react";
import { Grid } from "semantic-ui-react";

const style = {
  marginTop: "20px", 
  marginBottom: "0px",  
  backgroundColor:"rgba(0,0,0,0.5)"
}

const Latest = () => {
  return (
    <div>    
      <Grid columns={3} textAlign="center" style={style} stackable>       
        <Grid.Column>Viimeksi äänestetty: ABC Hirvaskangas</Grid.Column>
        <Grid.Column>Viimeksi kommentoitu: ABC Hirvaskangas</Grid.Column>
        <Grid.Column>Kaikista paras: ABC Hirvaskangas</Grid.Column>          
      </Grid>
    </div>
  );
};

export default Latest;