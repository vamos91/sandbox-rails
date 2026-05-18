import { faker } from '@faker-js/faker';

const email = faker.internet.email()

describe('Should load app', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/users/sign_up')
  })

  it('Should display alert wrong password', () => {
    cy.get('.alert').should('not.exist')
    cy.get('.email').type('tony@stark.fr')
    cy.get('.password').type('12345678')
    cy.get('.confirm-password').type('1234567')
    cy.get('.submit-button').click()
    cy.contains('Password confirmation doesn\'t match')
    
  })


  it('Should display alert on email already exist', () => {
    cy.get('.alert').should('not.exist')
    cy.get('.email').type('tony@stark.fr')
    cy.get('.password').type('12345678')
    cy.get('.confirm-password').type('12345678')
    cy.get('.submit-button').click()
    cy.contains('Email has already been taken')
  })

   it('Should redirect to sign in page', () => {
    cy.get('.alert').should('not.exist')
    cy.get('.email').type(email)
    cy.get('.password').type('12345678')
    cy.get('.confirm-password').type('12345678')
    cy.get('.submit-button').click()
    cy.url().should('include', '/')
   })
  
  // it('Should go to signin page and redirect to posts index page', () => {
  //   // cy.get('.logout-link').click()
  //   // cy.visit('http://localhost:3000/users/sign_in')
  // })


})