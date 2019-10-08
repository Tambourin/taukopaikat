import React, { useState } from "react";
import { connect } from "react-redux";
import { addImage } from "../reducers/placesReducer";
import { Segment, Button, Icon } from "semantic-ui-react";

const reader = new FileReader();

const AddImage = ({ place, addImage }) => {
  const [ImageByte64, setImageByte64] = useState("");
  const [loading, setLoading] = useState(false);
  const [chooseFileVisible, setChooseFileVisible] = useState(false);
  const [loadingSuccess, setLoadingSuccess] = useState(false);

  reader.addEventListener("load", () => {
    setImageByte64(reader.result);
  });

  const handleImageFileChange = event => {
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    await addImage(place, ImageByte64);
    setLoading(false);
    setLoadingSuccess(true);
    setTimeout(() => {
      setLoadingSuccess(false);
    }, 5000);
    setImageByte64("");
    setChooseFileVisible(false);
  };

  if (loadingSuccess) {
    return <Segment>Kuvan lisäys onnistui!</Segment>;
  }

  if (loading) {
    return <Segment loading></Segment>;
  }

  return (
    <div>
      <Button
        basic
        toggle
        active={chooseFileVisible}
        fluid
        size="tiny"
        onClick={() => setChooseFileVisible(!chooseFileVisible)}
      >
        <Icon name="plus" />
        Lähetä kuva
      </Button>
      {chooseFileVisible ? (
        <Segment>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageFileChange}
            ></input>
            <input type="submit"></input>
          </form>
        </Segment>
      ) : null}
    </div>
  );
};

export default connect(
  null,
  { addImage }
)(AddImage);
