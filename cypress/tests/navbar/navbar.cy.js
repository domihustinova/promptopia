import { VIEWPORT_SIZES } from "../../support/consts";

describe("Navbar", () => {
  it("Navbar displays correct links for signed in user - Iphone XR screen", () => {
    cy.viewport(VIEWPORT_SIZES[0].viewport);

    cy.log("Visit the Promptopia page");
    cy.visit("/");

    cy.log("Promptopia home page contains all elements");
    cy.findByRole("navigation").should("be.visible");
    cy.findByRole("heading", {
      name: "Discover & Share AI-Powered Prompts",
    }).should("be.visible");

    cy.log("Navbar contains Promptopia logo and profile picture menu");
    cy.findByRole("navigation").within(() => {
      cy.findByRole("link", { name: "Promptopia Logo" })
        .should("be.visible")
        .and("have.attr", "href", "/");
      cy.findByRole("img", { name: "Profile image" }).should("be.visible");
    });

    cy.log("Profile picture menu click displays dropdown with action buttons");
    cy.findByRole("img", { name: "Profile image" }).click();
    cy.findByTestId("dropdown")
      .should("be.visible")
      .within(() => {
        cy.findByRole("link", { name: "My Profile" }).should("be.visible");
        cy.findByRole("link", { name: "Create Prompt" }).should("be.visible");
        cy.findByRole("button", { name: "Sign Out" }).should("be.visible");
      });

    cy.findByRole("img", { name: "Profile image" }).click();
    cy.findByTestId("dropdown").should("not.exist");
  });

  VIEWPORT_SIZES.slice(1).forEach((size) => {
    const { title, viewport } = size;
    it(`Navbar displays correct links for signed in user - ${title} screen`, () => {
      cy.viewport(viewport);

      cy.log("Visit the Promptopia page");
      cy.visit("/");

      cy.log("Promptopia home page contains all elements");
      cy.findByRole("navigation").should("be.visible");
      cy.findByRole("heading", {
        name: "Discover & ShareAI-Powered Prompts",
      }).should("be.visible");

      cy.log("Navbar contains Promptopia logo and all action buttons");
      cy.findByRole("navigation").within(() => {
        cy.findByRole("link", { name: "Promptopia Logo Promptopia" })
          .should("be.visible")
          .and("have.attr", "href", "/");

        cy.findByRole("link", { name: "Create Post" }).should("be.visible");
        cy.findByRole("button", { name: "Sign Out" }).should("be.visible");
        cy.findByRole("img", { name: "Profile image" }).should("be.visible");
      });
    });
  });
});
