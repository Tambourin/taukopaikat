import React, { useState, useEffect } from "react";
import { Grid, Image, Segment, Responsive, Transition} from "semantic-ui-react";

const containerStyle = {
  position: "relative",
  marginTop: "0px",
  marginBottom: "-40px",  
  display: "flex",
  justifyContent: "center"
}

const textStyle = {
  position: "absolute",  
  minHeight: 200,
  top: 0,
  marginTop: "0px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "6%",
  fontFamily: "'Courgette', cursive ", 
  fontSize: "large"    
}

const textStyleMobile = {
  ...textStyle,
  padding: "4%",
  fontSize: "normal",  
}

const headingTexts = [
  "Taukopaikat.fi listaa Suomen parhaat taukopaikat valtateiden varsilta. Etsi seuraava pysähdyspaikka tai äänestä omaa suosikkiasi parhaiden joukkoon.",
  "Vaihtelun tarpeessa? Voit rajata tulokset koskemaan vain ketjuihin kuulumattomat paikat.",
  "Palkitut. Tilausajokuljettajat ry valitsee vuosittain parhaan taukopaikan. Mm. nämä löydät valitsemalla palkitut",
  "Näytä vain parhaat. Karttanäkymässä voit sliderillä tiputtaa kartasta huonoksi arvioituja paikkoja pois."
];

const Heading = () => {
  const [ currentTextIndex, setCurrentTextIndex ] = useState(0);
  const [ textIsVisible, setTextIsVisible ] = useState(true);

  useEffect(() => {          
    const interval = setTimeout(() => {      
      if (currentTextIndex < headingTexts.length - 1) { 
        setTextIsVisible(false);
        setCurrentTextIndex(currentTextIndex +  1);
        setTextIsVisible(true);             
      } else {
        setCurrentTextIndex(0);
      }      
      
    }, 5000);
    return () => clearTimeout(interval);
  }, [currentTextIndex]);


  return (
    <header>
      <Responsive as={Grid} columns={3} textAlign='center' celled style={{ marginTop: "0px", marginBottom: "0px",  background: "rgba(0, 0, 0, 0.3)" }} minWidth={Responsive.onlyTablet.minWidth}>       
        <Grid.Column>Viimeksi äänestetty: ABC Hirvaskangas</Grid.Column>
        <Grid.Column>Viimeksi kommentoitu: ABC Hirvaskangas</Grid.Column>
        <Grid.Column>Kaikista paras: ABC Hirvaskangas</Grid.Column>          
      </Responsive>                
      <div style={containerStyle}>
        <Image style={{ width: "100%" }} src="https://previews.123rf.com/images/petovarga/petovarga1701/petovarga170100009/70455786-flat-vector-cartoon-style-illustration-of-urban-landscape-street-with-cars-skyline-city-office-build.jpg" />
        <Responsive as={Segment} basic textAlign='center' style={textStyle} minWidth={Responsive.onlyTablet.minWidth}>
          <Transition visible={textIsVisible} animation="fade" duration={100}>
           <p>{headingTexts[currentTextIndex]}</p>
          </Transition>
        </Responsive>
        <Responsive as={Segment} basic textAlign='center' style={textStyleMobile} maxWidth={Responsive.onlyTablet.minWidth-1}>
          {headingTexts[currentTextIndex]}      
        </Responsive>
      </div >
    </header>
  );
};

export default Heading;