import React from "react";
import { Image, Label } from "semantic-ui-react";
import noChainImage from "../static/broken-link.png"
import open24hImage from "../static/stopwatch.png";
import awardedImage from "../static/trophy.png";
import attractionImage from "../static/witness.png";
import coffeeImage from "../static/coffee.png";
import gasStationImage from "../static/fuel.png";
import grillImage from "../static/grill.png";


const ServiceIcons = ({ place, size }) => {
  return (
    <Label.Group tag size={size ? size : "tiny"} style={{ marginTop: "5px" }}>
      {place.services.doesNotBelongToChain ? <Label><Image spaced="right" src={noChainImage} title="Ei kuulu ketjuun" /> Ei kuulu ketjuun </Label>: null}
      {place.services.isOpenTwentyFourHours ? <Label><Image spaced="right" src={open24hImage} title="Auki 24 h" />Auki 24 h </Label> : null}
      {place.services.hasBeenAvarded ? <Label><Image spaced="right" src={awardedImage} title="Palkittu" /> Palkittu</Label> : null}
      {place.services.isAttraction ? <Label><Image spaced="right" src={attractionImage} title="Nähtävyys"/> Nähtävyys</Label> : null}
      {place.services.isSummerCafe ? <Label><Image spaced="right" src={coffeeImage} title="Kesäkahvila"/> Kesäkahvila</Label> : null}
      {place.services.isGasStation ? <Label><Image spaced="right" src={gasStationImage} title="Huoltoasema" /> Huoltoasema</Label>: null}
      {place.services.isGrill ? <Label><Image spaced="right" src={grillImage} title="Grilli"/>Grilli</Label> : null}
    </Label.Group>
  )
}

export default ServiceIcons;