import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import PlaceCard from "./PlaceCard";

afterEach(cleanup);

const testPlace = {
  "id": 1,
  "name": "Vaskikello",
  "votes": 37,
  "highway": "4",
  "address": "Vaskikellontie 420 86800 Pyhäsalmi",
  "images": [
    "https://vaskikello.fi/img/1527505060096913.png"
  ],
  "description": "Vaikka Vaskikellon ravintola on tuttavallisen pieni, 82 paikkainen, olemme palvelleet sesonkiaikoina tuhansia asiakkaita päivässä, puoli miljoonaa vuodessa. Kesällä ulkoterassilla on tilaa. ",
  "services": {
    "doesNotBelongToChain": true,
    "isOpenTwentyFourHours": false,
    "hasPlayground": false,
    "hasRestaurant": true,
    "hasCofee": true,
    "isAttraction": true
  }
}

test("Place name is rendered", () => {
  const rendered = render(<PlaceCard place={testPlace}/>);
  expect(rendered.container).toHaveTextContent(testPlace.name);
});