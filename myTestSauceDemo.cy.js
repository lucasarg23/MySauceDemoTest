describe('SauceDemo', { testIsolation: false }, () => {
  const user1 = 'standard_user';
  const password = 'secret_sauce';
  const user2 = 'problem_user';
  
  
  it("Test User1", () => {
    cy.clearLocalStorage();
    cy.visit('https://www.saucedemo.com/');
    cy.login(user1, password);
    cy.selectItems();
    cy.checkout();
    cy.logout();
  
  });
  
  it("Test User2", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.login(user2, password);
    cy.selectItems();
    cy.checkout();
    cy.logout();
  
  });
});
