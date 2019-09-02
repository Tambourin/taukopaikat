import React from "react";
import { Segment, List, Checkbox, Icon, Popup } from "semantic-ui-react";

const ChooseServices = ({
  filter,
  setDoesNotBelongToChain,
  setIsOpenTwentyFourHours,
  setHasPlayground,
  setHasRestaurant,
  setHasCoffee,
  setIsAttraction
}) => {
  return (
    <Segment>
      <Popup
        content="Näytä vain taukopaikat joista löytyy valitut palvelut"
        trigger={<Icon name="info circle" />}
      />
      Näiden pitää toteutua:
      <List horizontal celled>
        <List.Item>
          <Checkbox
            label="Ei kuulu ketjuun"
            checked={filter.doesNotBelongToChain}
            onClick={setDoesNotBelongToChain}
          />
        </List.Item>
        <List.Item>
          <Checkbox
            label="Auki 24 h"
            checked={filter.isOpenTwentyFourHours}
            onClick={setIsOpenTwentyFourHours}
          />
        </List.Item>
        <List.Item>
          <Checkbox
            label="Leikkipaikka"
            checked={filter.hasPlayground}
            onClick={setHasPlayground}
          />
        </List.Item>
        <List.Item>
          <Checkbox
            label="Ravintola"
            checked={filter.hasRestaurant}
            onClick={setHasRestaurant}
          />
        </List.Item>
        <List.Item>
          <Checkbox
            label="Kahvila"
            checked={filter.isGasStation}
            onClick={setHasCoffee}
          />
        </List.Item>
        <List.Item>
          <Checkbox
            label="Nähtävyys"
            checked={filter.isAttraction}
            onClick={setIsAttraction}
          />
        </List.Item>
        <List.Item>
          <Checkbox label="Huotoasema" checked={false} onClick={null} />
        </List.Item>
      </List>
    </Segment>
  );
};

export default ChooseServices;
