///<reference types="Cypress"/>

describe('Handling webControls Suite', function(){
    // it('CheckBox Automation',function(){
    //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //     cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    //     cy.get('#checkBoxOption1').uncheck().should("not.be.checked")
    //     cy.get("input[type='checkbox']").check(['option1','option3'])
    // })

    // it('Handling Dropdown',function(){
    //     //Static dDropdown
    //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //     cy.get('select').select('option3').should('have.value','option3')

    //     //Dynamic Dropdown
    //     cy.get('#autocomplete').type('Ind')
    //     cy.get('.ui-menu-item div').each(($el,index,$list) => {
    //         if($el.text()=='India'){
    //             cy.wrap($el).click()
    //         }
    //     })
    //     cy.get('#autocomplete').should('have.value','India')
    // })

    it('Handling Visible / invisible Elements & Radio Buttons',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Handling Radio Buttons
        cy.get("input[value='radio3']").check().should('be.checked')
    })
})