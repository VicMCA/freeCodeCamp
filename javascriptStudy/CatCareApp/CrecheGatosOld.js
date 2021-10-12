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

import * as read from 'readline-sync';

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
        
        this.alimentar = () => {
            numeroRacao = read.question('Qual ração deseja dar?\n[1] Comum, [2] Castrados, [3] Medicinal >> ');
            switch(numeroRacao) {
                case '1':
                    tipoRacao = 'comum';
                    break;
                case '2':
                    tipoRacao = 'castrados';
                    break;
                case '3':
                    tipoRacao = 'medicinal';
                    break;
            }
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

/*
cat ascii

   |\---/|
   | ,_, |
    \_`_/-..----.
 ___/ `   ' ,""+ \  Art by "sk"
(__...'   __\    |`.___.';
  (_,...'(_,.`__)/'.....+


 ,_     _
 |\\_,-~/
 / _  _ |    ,--.
(  @  @ )   / ,-'
 \  _T_/-._( (
 /         `. \
|         _  \ |
 \ \ ,  /      |
  || |-_\__   /
 ((_/`(____,-'


  ,-.       _,---._ __  / \
 /  )    .-'       `./ /   \
(  (   ,'            `/    /|
 \  `-"             \'\   / |
  `.              ,  \ \ /  |
   /`.          ,'-`----Y   | Art by Hayley Jane Wakenshaw
  (            ;        |   '
  |  ,-.    ,-'         |  /
  |  | (   |            | /
  )  |  \  `.___________|/
  `--'   `--'


           __..--''``---....___   _..._    __
 /// //_.-'    .-/";  `        ``<._  ``.''_ `. / // /
///_.-' _..--.'_    \                    `( ) ) // //
/ (_..-' // (< _     ;_..__               ; `' / ///
 / // // //  `-._,_)' // / ``--...____..-' /// / //



       _                        
       \`*-.                    
        )  _`-.                 
       .  : `. .                
       : _   '  \               
       ; *` _.   `*-._          
       `-.-'          `-.       
         ;       `       `.     
         :.       .        \    
         . \  .   :   .-'   .   
         '  `+.;  ;  '      :   Art by Blazej Kozlowski
         :  '  |    ;       ;-. 
         ; '   : :`-:     _.`* ;
      .*' /  .*' ; .*`- +'  `*' 
      `*-*   `*-*  `*-*'



            _,'|             _.-''``-...___..--';)
           /_ \'.      __..-' ,      ,--...--'''
          <\    .`--'''       `     /'
           `-';'               ;   ; ;
     __...--''     ___...--_..'  .;.'
    (,__....----'''       (,..--''   Felix Lee
*/
const gatosLista = [], donosLista = [], infoPacote = {};

function main() {
    

    let resposta = '';
/*
              _,'\               _.-''``-...___..--';)
             /ŋ   \'.      __..-'        ,--...--'''
            '¯     . `''''´  .          /'
 .-.         `-';'          `-._     ; ;
(   )    __...--''     ___...--_..`  .;.'
 `-´~~~ (,__....----'''       (,....-'
*/
    console.log("              _,'\\               _.-''``-...___..--';)\n"+
    "             /ŋ   \\'.      __..-'        ,--...--'''\n"+
    "            '¯     . `''''´  .          /'\n"+
    " .-.         `-';'          `-._     ; ;\n"+
    "(   )    __...--''     ___...--_..`  .;.'\n"+
    " `-´~~~ (,__....----'''       (,....-'\n"+
    "🐱 Olá, bem-vindo(a) ao Gatotel! 🐱");
    // ASCII art funcionando super fofamente <3
    // Arte original por Felix Lee, e modificada por mim
    
    function menuInicial() {
        console.log(' o que deseja fazer?');
        
        resposta = read.question('[1] Cadastrar bichano\n[2] Administrar bichano\n[3] Sair');
        
            /* Dados do infoPacote:
            donoNome, donoCPF, donoFone, donoEmail
            gatoNome, gatoSexo, gatoIdade, gatoPelo, tipoRacao
            dataEntrada, dataSaida
            necessVet, isCastrado, isVermifugado, familiares
            */

        switch (resposta) {
            case '1':
                infoPacote = cadastro();
                eval("const gato_" + infoPacote['gatoNome'] + " = new Gato(infoPacote);");
                const gato_tonin = new Gato(infoPacote);
                // ^ eval() funciona como devido
                gatosLista.push(infoPacote['gatoNome']);
                donosLista.push(infoPacote['donoNome']);
                // ^ push funcionando como devido
                break;
            case '2':
                escolhaGato(gatosLista);
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


function acoesGatos(qualGato) {
    /* Ações: alimentar, brincar, carinho, apartar, dormir, chamar dono, chamar vet */
    
    
    console.log("Ações disponíveis:");

    acaoGato = read.question("[1] Ver dados, [2] Alimentar, [3] Brincar, [4] Dar carinho," +
    " [5] Apartar briga, [6] Colocar para dormir, [7] Chamar dono, [8] Chamar veterinário," +
    " [9] Escolher outro gato, [0] Voltar para o início");

    switch (acaoGato) {
        case '1':
            eval("gato_" + qualGato + ".alimentar();");
            break;
        case '2':
            eval("gato_" + qualGato + ".alimentar();");
            break;
        case '3':
            break;
        case '4':
            break;
        case '5':
            break;
        case '6':
            break;
        case '7':
            break;
        case '8':
            break;
        case '9':
            break;
        case '0':
            break;
        default:
            break;
    }

}


function escolhaGato(gatosLista) {
    /* Dados do infoPacote:
    donoNome, donoCPF, donoFone, donoEmail
    gatoNome, gatoSexo, gatoIdade, gatoPelo, tipoRacao
    dataEntrada, dataSaida
    necessVet, isCastrado, isVermifugado, familiares
    */
    

    console.log('Confira abaixo a lista de bichanos cadastrados:\n' + gatosLista);
    qualGato = read.question('Com qual deles deseja interagir? Digite o nome exatamente como exibido: ');

    if (qualGato in gatosLista) {
        acoesGatos(qualGato);
    } else {
        console.log('Nome informado inválido.');
        escolhaGato(gatosLista);
    }
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

main();