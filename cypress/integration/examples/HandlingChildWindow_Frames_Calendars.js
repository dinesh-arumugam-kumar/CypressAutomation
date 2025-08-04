///<reference types="cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe';

describe('Handling Child Window, Frames & Calendar Suite', () =>{
    it('Handling Child Window',() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then((el)=>{
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url,()=>{
                cy.get(".sub-menu-bar a[href*='about']").click()
                cy.get(".mt-50 h2").should('contain','QAClick Academy')
            })
        })
    })

    it('Handling Frames',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(2000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
    })

    it('Calendar Test',()=>{
        const monthNumber = "5"
        const date = "11"
        const year = "2023"
        const expectedList = [monthNumber,date,year]
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        cy.get(".react-date-picker__inputGroup").click()
        cy.get(".react-calendar__navigation__label").click()
        cy.get(".react-calendar__navigation__label").click()
        cy.contains("button",year).click()
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click()
        cy.contains("button",date).click()

        //Assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index,$list)=>{
            cy.wrap($el).invoke('val').then((text)=>{
                cy.log(text)
            })
            cy.wrap($el).invoke('val').should('eq',expectedList[index])
        })
    })
})