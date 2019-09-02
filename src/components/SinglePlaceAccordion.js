import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

const SinglePlaceAccordion = () => {
  const [ activeIndex, setActiveIndex ] = useState(-1);

  const openCloseAccordion = (index) => {
    console.log(index, activeIndex);
    index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index);  
  }

  return (
    <Accordion styled fluid>
        <Accordion.Title active={activeIndex === 0} onClick={() => openCloseAccordion(0)}>
          <Icon name='dropdown' />
          Palvelut
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>Palveluita löytyy</p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 1} onClick={() => openCloseAccordion(1)}>
          <Icon name='dropdown' />
          Aukiolo
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>Aukioloa löytyy</p>
        </Accordion.Content>        
    </Accordion>
  )
}

export default SinglePlaceAccordion;