import BasePage from "../BasePage"; 


export default class HomePage extends BasePage {
  
    static categoryChairs = '.departments > [href="/department/chairs"]'
    static categorySofas ='.departments > [href="/department/sofas"]'
    static categoyBedding ='.departments > [href="/department/bedding"]'
    static categoryLighting ='.departments > [href="/department/lighting"]'
    static categoryLighting ='.departments > [href="/department/lighting"]'
    static heroSectionLayout ='.jumbotron-large'
    static categoriesLayout = ':nth-child(1) > .departments'

    static load(){
        cy.visit('https://shopist.io/') 
    }

    static isLoaded(){
        cy.isVisible(this.heroSectionLayout)
        cy.isVisible1(this.categoriesLayout)
    }

    static clickChairsCard(){
        cy.get(this.categoryChairs).click()
    }

    static clickSofasCard(){
        cy.get(this.categorySofas).click()
    }

    static clickBeddingCard(){
        cy.get(this.categoryBedding).click()
    }

    static clickLightingCard(){
        cy.get(this.categoryLighting).click()
    }

}