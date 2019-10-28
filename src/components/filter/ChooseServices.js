import React from "react";
import { Segment, Checkbox, Icon, Popup, Grid } from "semantic-ui-react";

const ChooseServices = ({
  filter,
  setDoesNotBelongToChain,
  setIsOpenTwentyFourHours,
  setHasBeenAvarded,
  setIsAttraction,
  setIsSummerCafe,
  setIsGasStation,
  setIsGrill
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
            label="Palkittu"
            checked={filter.hasBeenAvarded}
            onClick={setHasBeenAvarded}
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
          <Checkbox
            label="Kesäkahvila"
            checked={filter.isSummerCafe}
            onClick={setIsSummerCafe}
          />
        </Grid.Column>
        <Grid.Column>
        <Checkbox
            label="Huotoasema"
            checked={filter.isGasStation}
            onClick={setIsGasStation}
          />
        </Grid.Column>        
        <Grid.Column>
          <Checkbox 
            label="Grilli" 
            checked={filter.isGrill} 
            onClick={setIsGrill} />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default ChooseServices;
