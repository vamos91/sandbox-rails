
describe('should redirect to post page', () => {
   
    it('Should redirect to post page', () => {
        cy.visit('http://localhost:3000/users/sign_in')
        cy.get('.email').type('tony@stark.fr')
        cy.get('.password').type('12345678')
        cy.get('.signin-button').click()
        
    })

    // it('Should diplay all articles', () => {
    //     cy.visit('http://localhost:3000')
    //     cy.get('.all-posts').click()
    // })

}) 