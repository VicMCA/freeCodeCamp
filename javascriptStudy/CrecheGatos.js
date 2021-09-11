// WORK IN PROGRESS

/* Vamos criar uma creche para gatos!
Ou pelo menos um app para o banco de dados da creche
Requerimentos >>
1. Cadastro dos gatitos;
2. Gatitos devem possuir as informações: 
        Nome, Idade, Dono, CPF do dono, Telefone do dono, Raça, Tipo de pelagem, 
        Data de entrada, Data de saída, Data de retorno, Tipo de ração, Necessidades 
        Veterinárias, Se é castrado(a), Se está vermifugado, Se possui familiares 
        que serão hospedados juntos;
3. Gatitos devem receber os seguintes cuidados:
    Alimentação, Atenção, Local de sono, Apartar brigas, Chamar Vet, Chamar dono;
4. Para fins deste exercício, o app deve ser capaz de cadastrar novos gatos seguindo 
    uma sequência de perguntas feitas para o cadastrante, a serem respondidas no terminal;
5. O app também deve ser capaz de consultar uma lista dos gatos hospedados, armazenar
    os cadastrados e seu status atual em um arquivo ao final da execução, e na abertura
    ler o arquivo para consultar os gatos hospedados na seção anterior;
6. Fazer uma versão em site quando chegarmos mais longe nos estudos ;) */

/* Estrutura:
    - Classe para criar os gatos cadastrados como objetos;
    - Métodos internos dos gatos: Alimentar, Brincar, Dar Atenção, Colocar para dormir
      Apartar briga, Chamar Vet, Chamar dono
    - Funções externas:
      Busca por nome, busca por dono, cadastro dos gatos, autosave, autoload */

class Gato {
    constructor(infoPacote) {
        let fome = 10;
        let briga = false;
        let triste = false;
        let sono = 0;
        let tedio = false;
        let doente = 0;

        /* TODO
        Funções privadas para randomizar as alterações nos status dos gatos.
        */

        this.donoNome = infoPacote[donoNome];
        this.donoCPF = infoPacote[donoCPF];
        this.donoFone = infoPacote[donoFone];
        this.donoEmail = infoPacote[donoEmail];
        this.gatoNome = infoPacote[gatoNome];
        this.gatoSexo = infoPacote[gatoSexo];
        this.gatoIdade = infoPacote[gatoIdade];
        this.gatoPelo = infoPacote[gatoPelo];
        this.tipoRacao = infoPacote[tipoRacao];
        this.dataEntrada = infoPacote[dataEntrada];
        this.dataSaida = infoPacote[dataSaida];
        this.necessVet = infoPacote[necessVet];
        this.isCastrado = infoPacote[isCastrado];
        this.isVermifugado = infoPacote[isVermifugado];
        this.familiares = infoPacote[familiares];
        this.alimentar = (tipoRacao) => {
            if (tipoRacao == this.tipoRacao) {
                return fome = 10;
            } else {racaoTipo
                racaoTipo
                racaoTipo
                return doente += 1;
            };
        };
        this.brincar = () => {
            return tedio = false;
        };
        this.carinho = () => {
            return triste = false;
        };
        this.apartar = () => {
            return briga = false;
        };
        this.dormir = () => {
            return sono = 0;
        };
    }
}


function main() {
    const read = require('readline-sync')

    const gatosLista = [], donosLista = [], infoPacote = {};
    let resposta = '';

    console.log('Olá, bem-vindo(a) ao Gatotel!');
    
    function menuInicial() {
        console.log(' o que deseja fazer?');
        
        resposta = read.question('[1] Cadastrar bichano\n[2] Administrar bichano\n[3] Sair');
        
        switch (resposta) {
            case '1':
                infoPacote = cadastro();
                eval("gato_" + infoPacote['gatoNome'] + " = new Gato(infoPacote)");
                // ^ eval() funciona como devido
                gatosLista.push(infoPacote['gatoNome']);
                donosLista.push(infoPacote['donoNome']);
                // ^ push funcionando como devido
                break;
            case '2':
                escolhaGato();
                break;
            case '3':
                sair();
                break;
            default:
                console.log('Dado inválido. Informe novamente');
                menuInicial();
                break;
        }
    }
    
    menuInicial();
}


function acoesDatabase() {

}


function acoesGatos() {

}


function escolhaGato() {

}


function sair() {

}


function cadastro() {
    // Status: funcionando
    let infoDono = { donoNome: '', donoCPF: '', donoFone: '', donoEmail: '' };
    let infoGato = { gatoNome: '', gatoSexo: '', gatoIdade: '', gatoPelo: '', tipoRacao: '' };
    let infoData = { dataEntrada: '', dataSaida: '' };
    let infoSaude = { necessVet: '', isCastrado: '', isVermifugado: '', familiares: '' };

    let questoesDono = {
        donoNome: 'Como se chama o/a dono(a)? ',
        donoCPF: 'Qual o CPF do/da dono(a)? ',
        donoFone: 'Qual o telefone do/da dono(a)? ',
        donoEmail: 'Qual o email do/da/ dono(a)? ',
    };

    let questoesGato = {
        gatoNome: 'Qual o nome do/da gatinho(a)? ',
        gatoSexo: 'Qual o sexo? ',
        gatoIdade: 'Quantos anos tem ele/ela? ',
        gatoPelo: 'Qual o tipo de pelagem? ',
        tipoRacao: 'Que tipo de ração ele/ela come? ',
    };

    let questoesData = {
        dataEntrada: 'Qual a data de entrada? ',
        dataSaida: 'Qual a data de saída? ',
    };

    let questoesSaude = {
        necessVet: 'O gatinho(a) possui alguma necessidade veterinária? ',
        isCastrado: 'O gatinho(a) já é castrado(a)? ',
        isVermifugado: 'O gatinho(a) já é vermifugado(a)? ',
        familiares: 'Tem mais outro gatinho(a) acompanhando ele/ela? ',
    };

    infoDono = questoesCadastro(infoDono, questoesDono);
    infoGato = questoesCadastro(infoGato, questoesGato);
    infoData = questoesCadastro(infoData, questoesData);
    infoSaude = questoesCadastro(infoSaude, questoesSaude);

    let infoPacote = Object.assign( {}, infoDono, infoGato, infoData, infoSaude);

    return infoPacote;
}


function questoesCadastro(infoDado, questoesDado) {
    // Status: funcionando
    const read = require('readline-sync');

    for (let key in infoDado) {
        while (infoDado[key] == null || infoDado[key] == undefined || infoDado[key] == '') {
            infoDado[key] = read.question(questoesDado[key]);
            if (infoDado[key] == null || infoDado[key] == undefined || infoDado[key] == '') {
                console.log('Dado inválido. Informe novamente');
            };
        };
    };
    
    return infoDado;
}


if (require.main === module) {
    main();
}