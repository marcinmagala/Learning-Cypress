describe("User journey", () => {
  it("a user can find the course on the home page and complete courses lessons", () => {
    cy.visit("http://localhost:3000")
    cy.getByData("course-0").find("a").eq(3).click()
    cy.location("pathname").should("eq", "/testing-your-first-application")

    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )

    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )

    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/")
    })
  })
})
