import React, { useState, useEffect } from "react";
import { Image, Segment, Responsive, Transition} from "semantic-ui-react";

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
  top: "14%",
  padding: "0px",
  marginTop: "0px",
  marginLeft: "auto",
  marginRight: "auto",
  width: "90%",
  fontFamily: "'Courgette', cursive ", 
  fontSize: "large"    
}

const textStyleTablet = {
  ...textStyle,
  top: "14%",
  
  fontSize: "normal",
}

const textStyleMobile = {
  ...textStyleTablet,
  top: "5%"
}

const headingTexts = [
  "Taukopaikat.fi listaa Suomen parhaat taukopaikat valtateiden varsilta. Etsi seuraava pysähdyspaikka tai äänestä omaa suosikkiasi parhaiden joukkoon.",
  "Vaihtelun tarpeessa? Voit rajata tulokset koskemaan vain ketjuihin kuulumattomat paikat.",
  "Palkitut. Tilausajokuljettajat ry. valitsee vuosittain parhaan taukopaikan. Mm. nämä löydät rajaamalla haun palkittuihin.",
  "Näytä vain parhaat. Karttanäkymässä voit sliderillä tiputtaa kartasta huonoksi arvioituja paikkoja pois."
];

const TEXT_SPEED = 800;

const Heading = () => {
  const [ currentTextIndex, setCurrentTextIndex ] = useState(0);
  const [ textIsVisible, setTextIsVisible ] = useState(true);

  useEffect(() => {   
    let changeTextWaitFade;       
    const changeTextTimeout = setTimeout(() => {  
      setTextIsVisible(false);
        changeTextWaitFade = setTimeout(() => {
        if (currentTextIndex < headingTexts.length - 1) {         
          setCurrentTextIndex(currentTextIndex +  1);                    
        } else {
          setCurrentTextIndex(0);
        }
        setTextIsVisible(true);
      }, TEXT_SPEED);  
      
        
    }, 5000);
    return () => {
      clearTimeout(changeTextTimeout); 
      clearTimeout(changeTextWaitFade);     
    }
  }, [currentTextIndex]);


  return (
    <header>  
                      
      <div style={containerStyle}>
        <Image style={{ width: "100%" }} src="https://previews.123rf.com/images/petovarga/petovarga1701/petovarga170100009/70455786-flat-vector-cartoon-style-illustration-of-urban-landscape-street-with-cars-skyline-city-office-build.jpg" />
        <Responsive as={Segment} basic textAlign="center" style={textStyle} minWidth={Responsive.onlyTablet.minWidth}>
          <Transition visible={textIsVisible} animation="fade" duration={TEXT_SPEED}>
           <div>{headingTexts[currentTextIndex]}</div>
          </Transition>
        </Responsive>
        <Responsive as={Segment} basic textAlign="center" style={textStyleTablet} maxWidth={Responsive.onlyTablet.minWidth-1} minWidth={440+1}>
          <Transition visible={textIsVisible} animation="fade" duration={TEXT_SPEED}>
            <div>{headingTexts[currentTextIndex]}</div>
          </Transition>      
        </Responsive>
        <Responsive as={Segment} basic textAlign="center" style={textStyleMobile} maxWidth={440}>
          <Transition visible={textIsVisible} animation="fade" duration={TEXT_SPEED}>
            <div>{headingTexts[currentTextIndex]}</div>
          </Transition>      
        </Responsive>
      </div >
    </header>
  );
};

export default Heading;