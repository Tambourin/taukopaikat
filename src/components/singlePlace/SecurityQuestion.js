import React from "react";
import { Modal, Form, Button, Label } from "semantic-ui-react";

const SecurityQuestion = ({
  modalOpen,
  modalField,
  setModalField,
  securityQuestionErrored,
  closeModal,
  sendComment
}) => {
  return (
    <Modal open={modalOpen} size="small">
      <Modal.Header>
        Lähettääksesi kommentin vastaa vielä seuraavaan turvakysymykseen:
      </Modal.Header>
      <Modal.Content>
        Mikä on Suomen pääkaupunki?
        <Form.Input
          value={modalField}
          onChange={(event, data) => setModalField(data.value)}
        />
        {securityQuestionErrored ? (
          <Label basic color="red" pointing>
            Väärä vastaus
          </Label>
        ) : null}
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={sendComment}>Lähetä</Button>
        <Button onClick={closeModal}>Peruuta</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default SecurityQuestion;