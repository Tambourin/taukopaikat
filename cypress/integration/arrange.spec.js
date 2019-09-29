import { testPlaces } from "./testPlaces";

describe("Arrange", function() {
  beforeEach(() => {
    cy.request("GET", "http://localhost:3001/api/places/delete");
    cy.request("POST", "http://localhost:3001/api/places", testPlaces[0]);
    cy.request("POST", "http://localhost:3001/api/places", testPlaces[1]);
    cy.visit("http://localhost:3000");
  });

  it("Arrange by name", function() {
    cy.wait(500);
    cy.contains("Parhaat ensin").click();
    cy.contains("Aakkosjärjestys").click();
    cy.get(".card").first().contains("ABC");
    cy.get(".card").eq(1).contains("Vaski");
    cy.contains("Aakkosjärjestys").click();
    cy.contains("Pohjoisesta").click();
    cy.get(".card").first().contains("Vaski");
    cy.get(".card").eq(1).contains("ABC");
    cy.contains("Pohjoisesta").click();
    cy.contains("Etelästä").click();
    cy.get(".card").first().contains("ABC");
    cy.get(".card").eq(1).contains("Vaski");
    cy.contains("Etelästä").click();
    cy.contains("Parhaat ensin").click();
    cy.get(".card").first().contains("Vaski");
    cy.get(".card").eq(1).contains("ABC");
  });

});