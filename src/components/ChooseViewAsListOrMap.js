import React from "react";
import { Button } from "semantic-ui-react";


const ChooseViewAsListOrMap = ({ viewOptions, showAsList, showOnMap}) => {
  console.log(viewOptions);
  return (
    <Button.Group fluid size="tiny">
      <Button active={!viewOptions.showOnMap} onClick={showAsList}>
        Listana
      </Button>
      <Button active={viewOptions.showOnMap} onClick={showOnMap}>
        Kartalla
      </Button>
    </Button.Group>
  );
};

export default ChooseViewAsListOrMap;

