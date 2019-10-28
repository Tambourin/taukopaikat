import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";

const footerStyle = {
  backgroundColor: "#B2D115",    
}

const footerUpperStyle = {
  padding: "50px 70px",
  margin: 0
}

const copyrightStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  padding: "10px 70px"
}

const mailtoStyle = { 
  color: "inherit", 
  textDecoration: "none" 
};

const columnStyle = { padding: "0px 10% 0px 0px" };

const headerStyle = {  fontFamily: "'Courgette', cursive " };

const Footer = () => {
  return (
    <footer style={footerStyle}>      
      <Grid style={footerUpperStyle} stackable divided columns="equal">          
        <Grid.Column style={columnStyle} width={10}>
          <h3 style={headerStyle}>Taukopaikat.fi:stä</h3>
          <p>Taukopaikat.fi on riippumaton verkkosivu, joka on syntynyt yksinkertaisesta halusta löytää hauskimmat taukopaikat. Sivu listaa Suomen parhaat taukopaikat valtateiden varsilta. Etsi seuraava pysähdyspaikka tai äänestä omaa suosikkiasi parhaiden joukkoon. Koska automatkailu voi olla kivaa!</p>
          <h4 style={headerStyle}>Mikä on paras taukopaikka?</h4>
          <p>Taukopaikkojen järjestys määräytyy Taukopaikat.fi:ssä tehtyjen äänestysten ja käyttäjien Google Mapsissä antamien pisteiden perusteella.</p>    
        </Grid.Column>
        <Grid.Column width={5}>
          <a style={mailtoStyle} href="mailto:jirka.hartonen@gmail.com?subject=Taukopaikat.fi yhteydenotto">
            <Icon circular name="mail" />
            Ota yhteyttä
          </a>
        </Grid.Column>
      </Grid>
        
      
      <div style={copyrightStyle}> 
        © 2019 Olavi Hartonen 
        <Image inline floated="right" src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png" />
      </div>
    </footer>
  )
}

export default Footer;