///<reference types="Cypress"/>

describe('My Second Test Suite', function(){
    it('Test 2',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(1000)
        cy.get('.products').as('ProductLocator') //Aliasing the locator with name
        cy.get('@ProductLocator').find('.product').should('have.length',4)
        cy.get('@ProductLocator').find('.product').each(($el,index, $list) => { // Looping concept
            const textval = $el.find('h4.product-name').text()
            if(textval.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logo){ // resolving promises
            cy.log(logo.text()) // Print in test runner
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})