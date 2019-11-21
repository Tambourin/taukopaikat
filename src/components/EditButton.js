import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const EditButton = ({ history, place, isAuthenticated }) => {
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <Button 
      icon="edit" 
      style={{ position: "absolute", top: "10px", right: "10px" }} 
      floated="right"
      content="Muokkaa"
      size="mini"
      onClick={() => history.push(`/edit/${place.id}`)}
    />    
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps)(EditButton));