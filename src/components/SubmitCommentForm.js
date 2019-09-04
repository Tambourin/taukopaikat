import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import SecurityQuestion from "./SecurityQuestion";

const SubmitCommentForm = ({ place, addComment }) => {
  const [ newComment, setNewComment ] = useState("");
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ modalField, setModalField ] = useState("");
  const [ securityQuestionErrored, setSecurityQuestionErrored ] = useState(false);

  const sendComment = () => {    
    if (modalField.toLowerCase() !== "helsinki") {
      setSecurityQuestionErrored(true);
      return;
    }
    setModalField("");
    setModalOpen(false);
    addComment(place, {
      content: newComment,
      author: "Olai Hartonen",
      date: new Date(),
      id: Math.floor(Math.random() * 10000)
    });
    setNewComment("");
  }

  const closeModal = () => {
    setModalField("");
    setModalOpen(false);
  }

  return (
    <Form onSubmit={() => setModalOpen(true)}> 
      <Form.TextArea 
        value={newComment}
        onChange={(event, data) => setNewComment(data.value)}
        placeholder="Kirjoita tähän kommenttisi tai arviosi"
      />                        
      <Button 
        type="submit"
        disabled={newComment.length < 15}
        content={newComment.length < 15 ? "Kommentti liian lyhyt" : "Jätä oma kommenttisi paikasta"}
        labelPosition="left" 
        icon="edit" 
        color="olive"              
      />
      <SecurityQuestion 
        modalOpen={modalOpen}
        modalField={modalField}
        setModalField={setModalField}
        securityQuestionErrored={securityQuestionErrored}
        closeModal={closeModal}
        sendComment={sendComment}
      />
    </Form>
  );
};

export default SubmitCommentForm;