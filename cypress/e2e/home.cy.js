describe("Home Page", () => {
  it("visits the home page and verifies it loads", () => {
    cy.visit("/");

    // Verify the page title
    cy.title().should("eq", "Kumar Pun | Software Engineer (QA)");

    // Verify the URL is the home page
    cy.location("pathname").should("eq", "/");

    // Verify the main landmark rendered (Hero/About/etc. sit inside <main>)
    cy.contains('h1', `Hi, I'm`)
  });
});
