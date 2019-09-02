import React from "react";
import { Segment, Header, Image, Divider, Button, Comment, Form, Label, Icon, Container } from "semantic-ui-react";
import RoadNumber from "../components/RoadNumber";
import VoteButton from "../components/VoteButton";
import SinglePlaceAccordion from "../components/SinglePlaceAccordion";

const SinglePlacePage = ({ place }) => {  
  if(!place) {
    return null;
  }
  return ( 
    <div> 
      
    <Segment textAlign="center" color="olive">
    <RoadNumber roadNumber={place.highway} floated="left"/>
      <Header as="h2" color="olive">{place.name.toUpperCase()}</Header>
      <Header color="yellow">{place.city}</Header>
      
      <b>Auki tänään:</b>
      
      <Divider />
      <Image bordered rounded src={place.images[0]} alt="Pääkuva taukopaikasta" />
      <Divider/>
      <p>{place.address}</p>
      <Button          
        href={`https://www.google.com/maps/search/?api=1&query=${place.name}`} 
        basic>
          <Image inline size="mini" src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/128/maps-icon.png" />
          Näytä Google Mapsissa
      </Button> 
      <Segment basic>{place.description}</Segment>   
      <SinglePlaceAccordion place={place}/>  
    </Segment>

    <Segment color="olive">  
    <Label.Group>
      <Label color="blue">
        <Icon name='like' />
        taukopaikat.fi 
        <Label.Detail>{place.votes}</Label.Detail>
      </Label>
      <Label color="blue">
        <Icon name='star'/>
        Arvio Google Mapsissa
        <Label.Detail>{place.votes}</Label.Detail>
      </Label>
      </Label.Group>  
      <VoteButton place={place}/> 
      <Comment.Group>
        <Header as='h3' dividing>
          Kommentit
        </Header>
        <Comment>
        <Comment.Content>
          <Comment.Author>Olavi Hartonen</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>Tässä näkyis niinku näin kommentteja</Comment.Text>
        </Comment.Content>
        </Comment>
        <Form reply> 
          <Form.TextArea />
          <Button content="Lisää kommentti" labelPosition="left" icon="edit" color="olive" />
        </Form>
      </Comment.Group>
    </Segment>
    </div>  
  )
}

export default SinglePlacePage;