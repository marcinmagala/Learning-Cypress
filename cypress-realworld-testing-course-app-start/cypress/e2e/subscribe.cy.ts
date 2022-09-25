describe("Newsletter subscribe form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows user to subscribe to the email list", () => {
    cy.getByData("email-input").type("typ@typ.pl")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("typ@typ.pl")
  })

  it("allows user to subscribe to the email list", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("john@example.com")
  })

  it("NOT allows user to subscribe to the email list", () => {
    cy.getByData("email-input").type("blabla.pl")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })
})
