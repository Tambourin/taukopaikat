import React from "react";
import { Segment, Grid, Checkbox } from "semantic-ui-react";

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
      Näiden pitää toteutua:
      <Grid columns={2} divided>
        <Grid.Row>
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
        </Grid.Row>
        <Grid.Row>
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
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Checkbox
              label="Kahvila"
              checked={filter.hasCoffee}
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
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default ChooseServices;
