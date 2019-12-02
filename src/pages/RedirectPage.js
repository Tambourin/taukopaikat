import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Segment } from "semantic-ui-react";

const RedirectPage = ({ user, targetUrl, errored }) => {
  console.log("user:", user);
  if(!user) {
    return <Segment loading></Segment>
  }

  if(errored) {
    return <Redirect to={"/"} />
  }

  return (
    <div>
      <Redirect to={targetUrl} />
    </div>
  );
};
const mapStateToProps = state => {  
  return {
    user: state.user.user,
    errored: state.user.errored,
    targetUrl: state.user.targetUrl
  };
};
export default connect(mapStateToProps)(RedirectPage);
