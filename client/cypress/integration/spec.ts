describe('Initial Application Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Dating App');
    cy.contains('Find your match');
  });
});
