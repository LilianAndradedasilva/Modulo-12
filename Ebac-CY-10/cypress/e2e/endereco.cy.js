/// <reference types = "cypress" />

//Importando arquivos
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        });
    
    it ('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Marcia','Souza', 'ACORD','Brasil','Rua Clélia','10100','Lapa','São Paulo','01000000','119888888888','maria@acord.com.br' )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso')
        
    });

    it.only ('Deve fazer cadastro de faturamento com sucesso, usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email  
        )
       
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso')
        
    });
});