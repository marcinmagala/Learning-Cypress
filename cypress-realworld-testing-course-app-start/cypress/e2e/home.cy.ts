describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the home page are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
    })
  })

  context("Course section", () => {
    it("Course: Testing your first Next.js application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })

    it("Course: Testing-foundation", () => {
      cy.getByData("course-1").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })

    it("Start the course", () => {
      cy.visit("http://localhost:3000/testing-foundations")
      cy.getByData("next-lesson-button").click()
      cy.location("pathname").should(
        "eq",
        "/testing-foundations/testing-is-a-mindset"
      )
    })
  })
})
