import React, { useState } from "react";
import { Accordion, Icon, Image } from "semantic-ui-react";
import PlacesMap from "../placesView/PlacesMap";
import OpeningHoursList from "./OpeningHoursList";

import coffeeImage from "../../static/coffee.jpg";
import open24hImage from "../../static/open24h.png";
import restaurantImage from "../../static/restaurant.jpg";
import kindergartenImage from "../../static/kindergarten.png";
import gasStationImage from "../../static/gas-station.jpg";
import attractionImage from "../../static/attraction.jpg";


const SinglePlaceAccordion = ({ place, activeGoogleData, openingHours }) => {  
  const [ activeIndex, setActiveIndex ] = useState(-1);

  const openCloseAccordion = (index) => {    
    index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index);  
  }

  const servicesIcons = () => {    
    return (
      <Image.Group>
        {place.services.hasCoffee ? <Image size="tiny" src={coffeeImage} /> : null}
        {place.services.isOpenTwentyFourHours ?<Image size="tiny" src={open24hImage}/>: null}
        {place.services.hasRestaurant ? <Image size="tiny" src={restaurantImage}/>: null}
        {place.services.hasPlayground ?<Image size="tiny" src={kindergartenImage}/>: null}
        {place.services.hasGasStation ?<Image size="tiny" src={gasStationImage}/>: null}
        {place.services.isAttraction ? <Image size="tiny" src={attractionImage}/>: null}
      </Image.Group>
    )
  }

  return (
    <Accordion styled fluid>
        <Accordion.Title active={activeIndex === 0} onClick={() => openCloseAccordion(0)}>
          <Icon name="dropdown" color="olive"/>
          Yhteystiedot
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <div>
            {activeGoogleData.address}, {activeGoogleData.city}
          </div>  
          <div>
            <a id="webLink"  href={activeGoogleData.www}>Verkkosivu</a>
          </div>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 1} onClick={() => openCloseAccordion(1)}>
          <Icon name="dropdown" color="olive"/>
          Palvelut
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>          
          {servicesIcons()}
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 2} onClick={() => openCloseAccordion(2)}>
          <Icon name="dropdown" color="olive"/>
          Aukiolo
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <OpeningHoursList openingHours={openingHours} />          
        </Accordion.Content> 
        <Accordion.Title active={activeIndex === 3} onClick={() => openCloseAccordion(3)}>
          <Icon name="dropdown" color="olive"/>
          Kartta
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          {activeIndex === 3 ? <PlacesMap places={[place]}/> : null}
        </Accordion.Content>    
    </Accordion>
  )
}

export default SinglePlaceAccordion;