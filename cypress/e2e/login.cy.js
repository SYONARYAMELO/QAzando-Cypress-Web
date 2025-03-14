
///<reference types="cypress"/>  usar no vscode


// Teste de responsividade, testar tipos de celular etc
//usa > cy.viewport('')
//it.only > roda somente o teste sinalizado
//beforeEach > posso usar com varias tags a exemplo a baixo

//funcionalides
describe('login', () => {
    beforeEach(() => {
        cy.viewport('iphone-5')
    })

//CENARIO 01
it('Login realizado com sucesso', () => {
//DADO
// abrir a aplicação

cy.visit('https://automationpratice.com.br/login')

//preenche email e senha
    cy.get('#user').type('edu@qazando.com')
    cy.get('#password').type('123456')

//QUANDO
//clicar em entrar
    cy.get('#btnLogin').click()

//ENTAO
//valida mensagem
    cy.get('#swal2-title').should('be.visible')
    cy.get('#swal2-title').should('contain.text','Login realizado')

})

//CENARIO 02
    it('E-mail invalido', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('bfdjihbsijf')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('contain.text', 'E-mail inválido.')

    })


//CENARIO 03
it('Senha invalido', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('edu@qazando.com')
    cy.get('#password').type('gs5g4')
    cy.get('#btnLogin').click()

    cy.get('.invalid_input').should('contain.text', 'Senha inválida.')

})
//CENARIO 04
it('Senha vazia', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('edu@qazando.com')

    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('contain.text', 'Senha inválida.')

})

//CENARIO 05
it('E-mail vazio', () => {
    cy.visit('https://automationpratice.com.br/login')

    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()

    cy.get('.invalid_input').should('contain.text', 'E-mail inválido')

})

//CENARIO 06
it('E-mail e senha vazios', () => {
    cy.visit('https://automationpratice.com.br/login')


    cy.get('#btnLogin').click()

    cy.get('.invalid_input').should('contain.text', 'E-mail inválido')

})
})
