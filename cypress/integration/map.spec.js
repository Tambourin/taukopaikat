import testPlaces from "./testPlaces";
import testUtility from "./testUtility";

describe("mapView tests", function() {
  beforeEach(() => {
    testUtility.prepare(testPlaces);
  });

  it("can open map view", function() {
    cy.contains("Kartalla").click();
    cy.wait(300);
    cy.get("iframe");
  });
});