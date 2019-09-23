import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import { addPlace } from "../reducers/placesReducer";
import { withRouter } from "react-router-dom";

const reader = new FileReader();


const EditPage = ({ history, addPlace }) => {
  const [ImageByte64, setImageByte64 ] = useState("");

  reader.addEventListener("load", () => {  
    setImageByte64(reader.result);
  });

  const handleSubmit = async event => {  
    event.preventDefault();              
    const place = {
      name: event.target.nameField.value,
      description: event.target.descriptionField.value,
      highway: event.target.highwayField.value,      
      services: {
        doesNotBelongToChain: event.target.doesNotBelongToChain.checked,
        isOpenTwentyFourHours: event.target.isOpenTwentyFourHours.checked,
        hasPlayground: event.target.hasPlayground.checked,
        hasRestaurant: event.target.hasRestaurant.checked,
        hasCofee: event.target.hasCofee.checked,
        isAttraction: event.target.isAttraction.checked,
        isGasStation: event.target.isGasStation.checked,
        isGrill: event.target.isGrill.checked
      },
      imageData: ImageByte64
    }; 
    const result = await addPlace(place); 
    console.log(result); 
    history.push("/");      
  }

  const handleImageFileChange = (event) => {
    reader.readAsDataURL(event.target.files[0]);
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="nameField">Nimi</label>
          <input name="nameField" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="addressField">Osoite</label>
          <input name="addressField" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="highwayField">Tien numero:</label>
          <input name="highwayField" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="descriptionField">Kuvaus:</label>
          <input name="descriptionField" />
        </Form.Field>        
        <Form.Group>
          <label htmlFor="doesNotBelongToChain">doesNotBelongToChain</label>
          <Form.Checkbox name="doesNotBelongToChain" />
          <label htmlFor="isOpenTwentyFourHours">avoinna 24h</label>
          <Form.Checkbox name="isOpenTwentyFourHours" />
          <label htmlFor="hasPlayground">hasPlayground</label>
          <Form.Checkbox name="hasPlayground" />
          <label htmlFor="hasRestaurant">hasRestaurant</label>
          <Form.Checkbox name="hasRestaurant" />
          <label htmlFor="hasCofee">hasCofee</label>
          <Form.Checkbox name="hasCofee" />
          <label htmlFor="isAttraction">isAttraction</label>
          <Form.Checkbox name="isAttraction" />
          <label htmlFor="isGasStation">isGasStation</label>
          <Form.Checkbox name="isGasStation" />
          <label htmlFor="isGrill">isGrill</label>
          <Form.Checkbox name="isGrill" />
        </Form.Group>
        <Form.Field>
          <input type="file" name="image" onChange={handleImageFileChange}></input>
        </Form.Field>
        <Button type="submit">Lähetä</Button>
      </Form>
  );
}

export default withRouter(connect(null, { addPlace })(EditPage));