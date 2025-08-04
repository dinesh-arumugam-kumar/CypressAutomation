///<reference types="Cypress"/>

describe('Handling Alerts, Popups & Child Window Suite', () =>{
    it('Popup & Alerts Automation',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        cy.get("input[value='Confirm']").click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get("input[value='Confirm']").click()
        cy.on('window:cancel',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it('Child Tab / window Automation',() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin("https://www.qaclickacademy.com/",() =>{
            cy.wait(1000)
            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get(".mt-50 h2").should('contain','QAClick Academy')
        })
    })

    it('Handling web tables',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("tr td:nth-child(2)").each(($el,index,$list) =>{
            const text = $el.text()
            if(text.includes("Python Language")){
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                    const pricetext = price.text()
                    cy.log(pricetext)
                    expect(pricetext).to.equal('25')
                })
            }
        })
    })

    it('Handling Mouse Hover',() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#mousehover").invoke('show')
        cy.contains('Top').click({force:true}) // force true will click the hidden elements as well
        cy.url().should('include','top')
    })
})