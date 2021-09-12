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
    const read = require('readline-sync');

    console.log("              _,'\\               _.-''``-...___..--';)\n"+
    "             /ŋ   \\'.      __..-'        ,--...--'''\n"+
    "            '¯     . `''''´  .          /'\n"+
    " .-.         `-';'          `-._     ; ;\n"+
    "(   )    __...--''     ___...--_..`  .;.'\n"+
    " `-´~~~ (,__....----'''       (,....-'\n"+
    "🐱 Olá, bem-vindo(a) ao Gatotel! 🐱");

    gato = criarCadastro();
    console.log("Lista de gatos cadastrados: " + gatoLista);
    teste();    
}


function criarCadastro() {
    cadastro(infoPacote);
    gatoLista.push(infoPacote['nome']);
    return gato = eval(`${gatoLista[1]} = new Gato('${infoPacote['nome']}', '${infoPacote['idade']}');`);
}


function cadastro(infoPacote) {
    const read = require('readline-sync');

    let nome = read.question('Digite o nome do gato >> ');
    let idade = read.question('Digite a idade do gato >> ');

    infoPacote.nome = nome;
    infoPacote.idade = idade;

    return infoPacote;
}


function teste() {
    eval(`${gatoLista[1]}.status();`);
}


if (require.main === module) {
    main();
}