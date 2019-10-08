import { testPlaces } from "./testPlaces";

describe("mapView tests", function() {
  beforeEach(() => {
    cy.request("GET", "http://localhost:3001/api/places/delete");
    cy.request("POST", "http://localhost:3001/api/places", testPlaces[0]);
    cy.visit("http://localhost:3000");
  });

  it("can open map view", function() {
    cy.contains("Kartalla").click();
    cy.wait(300);
    cy.get("iframe");
  });
});