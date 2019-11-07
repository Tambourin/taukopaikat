const baseApiUrl = "http://localhost:3001/api/places";
const baseFrontUrl = "http://localhost:3000";

const prepare = (places) => {
  cy.request("GET", `${baseApiUrl}/delete`);
  places.forEach(place => {
    cy.request("POST", baseApiUrl, place);
  });  
  cy.visit(baseFrontUrl);
}

export default { prepare };