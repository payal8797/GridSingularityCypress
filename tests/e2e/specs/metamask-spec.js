
describe('Metamask', () => {
  context('Test commands', () => {
    //Commented suite setup since this user is already registered. To run the setup, please enter username and email that do not exist on Grid Singularity and also comment line 13.
    /*it(`Suite Setup:Given user wants to register on Grid Singularity when he enters all the required details correctly for registration then he should be able to register successfully`, () => {
      cy.visit('/');
      cy.Register(Cypress.env('payal123'), Cypress.env('payal8797+0@gmail.com'), Cypress.env('payal123'))
      cy.wait(5000)
      cy.Logout()
    });*/

    it(`Case1: Given user wants to login on Grid Singularity when he enters all the required details correctly of already registered user then he should be able to login successfully`, () => {
      cy.visit('/');
      cy.Login(Cypress.env('payal8797+0@gmail.com'), Cypress.env('payal123'))
      cy.wait(5000)
      cy.Logout()
    });
  });
});
