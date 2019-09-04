import React from "react";
import { Segment, List, Checkbox, Icon, Popup, Grid } from "semantic-ui-react";

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
      <Grid doubling columns={8} centered>
        <Grid.Column>
          <Checkbox
            label="Ei kuulu ketjuun"
            checked={filter.doesNotBelongToChain}
            onClick={setDoesNotBelongToChain}
          />
        </Grid.Column>
        <Grid.Column>
          <Checkbox
            label="Auki 24 h"
            checked={filter.isOpenTwentyFourHours}
            onClick={setIsOpenTwentyFourHours}
          />
        </Grid.Column>
        <Grid.Column>
          <Checkbox
            label="Leikkipaikka"
            checked={filter.hasPlayground}
            onClick={setHasPlayground}
          />
        </Grid.Column>
        <Grid.Column>
          <Checkbox
            label="Ravintola"
            checked={filter.hasRestaurant}
            onClick={setHasRestaurant}
          />
        </Grid.Column>
        <Grid.Column>
          <Checkbox
            label="Kahvila"
            checked={filter.isGasStation}
            onClick={setHasCoffee}
          />
        </Grid.Column>
        <Grid.Column>
        <Checkbox
            label="Nähtävyys"
            checked={filter.isAttraction}
            onClick={setIsAttraction}
          />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Huotoasema" checked={false} onClick={null} />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Grilli" checked={false} onClick={null} />
        </Grid.Column>

      </Grid>


      
    </Segment>
  );
};

export default ChooseServices;
