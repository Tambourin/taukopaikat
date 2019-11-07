import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ChooseViewAsListOrMap = ({ viewOptions, showAsList, showOnMap }) => {
  return (
    <Button.Group color="yellow" fluid>
      <Button active={viewOptions.showOnMap === false} onClick={showAsList}>
        <Icon name="list" />
        Listana
      </Button>
      <Button active={viewOptions.showOnMap === true} onClick={showOnMap}>
        <Icon name="map outline" />
        Kartalla
      </Button>
    </Button.Group>
  );
};

export default ChooseViewAsListOrMap;
