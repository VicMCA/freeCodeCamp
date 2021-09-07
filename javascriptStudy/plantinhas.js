// Como dicionário
let monstera = {
    nome: 'Monstera Deliciosa',
    dataChegada: '02/12/2017',
    regasMes: 12,
    iluminacao: 'meia-sombra',
    adubacaoMes: 2
};

// Como objeto
let raphidophora = {
    nome: 'Raphidophora Tetrasperma',
    dataChegada: '14/05/2019',
    regasMes: 15,
    iluminacao: 'sol',
    adubacaoMes: 3,
    regasRestantes: function(quant) {
        return `Falta regar ${this.regasMes - quant} vezes este mês`;
    }
}

// Classes para facilitar a vida
class Plantas {
    constructor(nome="", data="", totalRegas=0, iluminacao="", totalAdubacao=0) {
        this.nome = nome;
        this.data = data;
        this.totalRegas = totalRegas;
        this.iluminacao = iluminacao;
        this.totalAdubacao = totalAdubacao;
        this.regasRestantes = function(regas) {
            return `Falta regar ${this.totalRegas - regas} vezes este mês`;
        };
        this.adubacaoRestantes = function(adubacao) {
            return `Falta adubar ${this.totalAdubacao - adubacao} vezes este mês`;
        }
    }
}

let singonio = new Plantas('Singonio Rosa', '05/05/2020', 15, 'meia-sombra', 5);
console.log(singonio);

let jiboia = new Plantas('Jiboia Prateada');
console.log(jiboia);

jiboia.data = '08/03/2021';

console.log(singonio.regasRestantes(7));
console.log(singonio.adubacaoRestantes(2));

console.log(jiboia);