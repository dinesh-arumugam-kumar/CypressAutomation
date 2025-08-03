///<reference types="Cypress"/>

describe('My First Test Suite', function(){
    it('Test 1',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(1000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.wait(1000)
        // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el,index, $list) => {
            const textval = $el.find('h4.product-name').text()
            if(textval.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
    })
})