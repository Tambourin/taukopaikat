import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Segment } from "semantic-ui-react";

const RedirectPage = ({ user, targetUrl }) => {
  return (
    <div>
      {user ? <Redirect to={targetUrl} /> : <Segment loading></Segment>}
    </div>
  );
};
const mapStateToProps = state => {  
  return {
    user: state.user.user,
    targetUrl: state.user.targetUrl
  };
};
export default connect(mapStateToProps)(RedirectPage);
