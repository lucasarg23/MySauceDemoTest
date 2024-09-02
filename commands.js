Cypress.Commands.add('login',(user,pass)=>{
    cy.get('#user-name').type(user);
    cy.get('#password').type(pass);
    cy.get('#login-button').click();

})

Cypress.Commands.add('loginproblemuser',(user2,pass)=>{
    cy.get('#user-name').type(user2);
    cy.get('#password').type(pass);
    cy.get('#login-button').click();

})

Cypress.Commands.add('selectItems', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  });
  
  Cypress.Commands.add('checkout', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Name");
    cy.get('[data-test="lastName"]').type("Las Name");
    cy.get('[data-test="postalCode"]').type("0101");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="checkout-complete-container"]').should('contain', 'Thank you for your order!');
  });

  Cypress.Commands.add('logout', () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get('[data-test="logout-sidebar-link"]').click();
  });