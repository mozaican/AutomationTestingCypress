describe('Demoblaze.com tests', () => {

    it('product details page shown correctly', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();

        cy.url().should('include','/prod.html?idp_=1');
    })

    it('add product in cart', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();

        cy.get('.success > :nth-child(2)').should('include.text','Samsung galaxy s6');
    })

    it('delete product from cart', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.get('.success > :nth-child(4) > a').click();

        cy.get('.success > :nth-child(2)').should('include.text','');
    })

    it('place order', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.get('.col-lg-1 > .btn').click();
        cy.get('#name').type('John');
        cy.get('#country').type('USA');
        cy.get('#city').type('NYC');
        cy.get('#card').type('2983737424');
        cy.get('#month').type('08');
        cy.get('#year').type('2024');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

        cy.get('.sweet-alert > h2').should('include.text','Thank you for your purchase!');
    })


})