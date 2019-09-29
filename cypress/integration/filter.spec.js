const testPlace = {
  name: "ABC Kuortti",
  city: "Pertunmaa",
  description: "testikuvaus",
  highway: 5,
  services: {
    doesNotBelongToChain: false,
    isOpenTwentyFourHours: true,
    hasPlayground: true,
    hasRestaurant: true,
    hasCofee: true,
    isAttraction: false,
    isGasStation: true,
    isGrill: false
  }
};

describe("Filter", function() {
  beforeEach(() => {
    cy.request("GET", "http://localhost:3001/api/places/delete");
    cy.request("POST", "http://localhost:3001/api/places", testPlace);
    cy.visit("http://localhost:3000");
  });
  
  it("front page can be opened", function() {    
    cy.contains("Taukopaikat.fi");
  })

  it("filter highway", function() {
    cy.get("#highwayFilterDropdown").click();
    cy.contains("1").click();
    cy.contains("Haku ei tuottanut tuloksia");
    cy.get("#highwayFilterDropdown").click();
    cy.contains(testPlace.highway).click();
    cy.contains(testPlace.name);
  });

  it("filter by text search", function() {
    cy.get("#searchWordInput").type("ffffff");
    cy.contains("Haku ei tuottanut tuloksia");
    cy.get("#searchWordInput").clear();
    cy.get("#searchWordInput").type("ABC");
    cy.contains(testPlace.name);
    cy.get("#searchWordInput").clear();
  });

  it("filter by selcting services", function() {
    cy.contains("Ei kuulu ketjuun").click();
    cy.contains("Haku ei tuottanut tuloksia");
    cy.contains("Ei kuulu ketjuun").click();

    cy.contains("Auki 24 h").click();
    cy.contains(testPlace.name);
    cy.contains("Auki 24 h").click();

    cy.contains("Leikkipaikka").click();
    cy.contains(testPlace.name);
    cy.contains("Leikkipaikka").click();

    cy.contains("Ravintola").click();
    cy.contains(testPlace.name);
    cy.contains("Ravintola").click();

    cy.contains("Kahvila").click();
    cy.contains(testPlace.name);
    cy.contains("Kahvila").click();

    cy.contains("Nähtävyys").click();
    cy.contains("Haku ei tuottanut tuloksia");
    cy.contains("Nähtävyys").click();
  });
});