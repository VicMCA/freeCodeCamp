import * as read from 'readline-sync'

class Gato {
    constructor(name, age) { // It'll receive 2 parameters
        this.name = name;
        this.age = age;
        this.boredom = 10;
        
        this.play = () => {
            return this.boredom -= 1;
        }
        this.sleep = () => {
            return this.boredom += 1;
        }
        this.status = () => {
            console.log(`Propriedades:\nnome: ${this.name}\nidade: ${this.age}\ntédio: ${this.boredom}`);
        }
    }
}

const clarisse = new Gato('clarisse', 12);

let gatoLista = ['clarisse'];
let infoPacote = {};
var gato;

function main() {
    

    console.log("              _,'\\               _.-''``-...___..--';)\n"+
    "             /ŋ   \\'.      __..-'        ,--...--'''\n"+
    "            '¯     . `''''´  .          /'\n"+
    " .-.         `-';'          `-._     ; ;\n"+
    "(   )    __...--''     ___...--_..`  .;.'\n"+
    " `-´~~~ (,__....----'''       (,....-'\n"+
    "🐱 Olá, bem-vindo(a) ao Gatotel! 🐱");

    menuInicial();
    console.log("Lista de gatos cadastrados: " + gatoLista);
    teste();    
}


function menuInicial() {
        
    
    console.log('🧶🐈 O que deseja fazer? Digite o número da opção escolhida:');
    let resposta = read.question('[1] Cadastrar bichano\n[2] Consultar bichano\n[3] Administrar bichano\n[4] Sair\n>> ');

    switch (resposta) {
        case '1':
            gato = criarCadastro();
            /*
            Cada cadastro criado está sobrescrevendo o objeto ao invés de criar um novo :(
            Para progredir terei de salvar os objetos em um banco de dados .json,
            e a cada vez que for interagir com um objeto devo usar o banco de dados
            para recriar o objeto com os atributos com os quais foi salvo, e ao encerrar
            a interação devo salvá-lo de novo com as modificações
            */
            break;
        case '2':
            teste();
            break;
        case '3':
            // escolhaGato(gatoLista);
            break;
        case '4':
            encerrarPrograma();
            break;
        default:
            console.log('Dado inválido. Informe novamente');
            menuInicial();
            break;
    }

    menuInicial();
}


function criarCadastro() {
    cadastro(infoPacote);
    gatoLista.push(infoPacote['nome']);
    return gato = eval(`let ${gatoLista[1]} = new Gato('${infoPacote['nome']}', '${infoPacote['idade']}');`);
}


function cadastro(infoPacote) {
    

    let nome = read.question('Digite o nome do gato >> ');
    let idade = read.question('Digite a idade do gato >> ');

    infoPacote.nome = nome;
    infoPacote.idade = idade;

    return infoPacote;
}


function teste() {
    
    console.log("Lista de gatos cadastrados: " + gatoLista);

    let nome = read.question('Qual bichano deseja consultar?\n>> ');
    eval(`${gatoLista[nome-1]}.status();`);
}


function encerrarPrograma() {
    Exit
    return 1;
}

main();
