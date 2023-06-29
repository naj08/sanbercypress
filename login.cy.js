describe('Log in Sauce Demo', () => 
{beforeEach(() => {
  cy.visit('https://www.saucedemo.com/')
})
  it('Success Log in', () => {
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //validasi
    cy.get('.title').should('be.visible')
  })

  it('Failed Log in invalid password', () => {
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('xxxxxxx')
    cy.get('[data-test="login-button"]').click()

    //validasi
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service')
  })

  it('Failed Log in ', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //validasi
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.')
  })

})