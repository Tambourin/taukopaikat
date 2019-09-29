import React from "react";
import { connect } from "react-redux";
import { Comment, Header } from "semantic-ui-react";
import { addComment } from "../../reducers/placesReducer";
import SubmitCommentForm from "./SubmitCommentForm";
import Comments from "./Comments";

const CommentBox = ({ place, addComment }) => {  
  return (    
    <Comment.Group style={{margin: "auto"}}>
      <Header as="h3" dividing> Kommentit </Header>
      <Comments comments={place.comments} />
      <SubmitCommentForm place={place} addComment={addComment}/>
    </Comment.Group>
  )
}

export default connect(null, { addComment })(CommentBox);