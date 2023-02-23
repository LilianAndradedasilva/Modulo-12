class EnderecoPage {

    //metodos
   editarEnderecoFaturamento(nome, sobrenome, empresa, país, endereco, numero, cidade, estado, cep, telefone, email) {
        // todos os elementos + todas as ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container')
        cy.get('#select2-billing_country-container').click().type(país).get(cy.get('[aria-selected="true"]').click())
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()

    }

    editarEnderecoEntrega() {
        // todos os elementos + todas as ações

    }
}
//para que essa classe (endereço) fique exposta para que outros arquivos possam enxergar usar o export
export default new EnderecoPage() 
