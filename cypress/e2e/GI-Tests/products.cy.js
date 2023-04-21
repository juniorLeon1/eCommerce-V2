describe("Product Page Testing", () => {
  beforeEach(() => {
    // cy.visit("localhost:3000/products");
    cy.visit("https://silver-alfajores-3b1022.netlify.app")
    cy.get(".navA").contains("Tools").click()
  });

  it("will check hero title", () => {
    cy.get(".prod_Hero").should("have.text", "Our Tools");
  });

  it("check product result counter", () => {
    cy.get(".results-counter").contains("12 Results");
  });

  it("will check price filter state", () => {
    cy.get(".price-filter__select").select("low");

    cy.get(".price-filter__select").contains("$0 - $50");
  });

  it("will check how many products are displayed on the low  price range", () => {
    cy.get(".price-filter__select").select("low");

    cy.get(".productContainer").within(() => {
      cy.get(".productCard").should("have.length", 2);
    });
  });
});
