function main() {
    // Vamos classificar algumas plantas

    class Plantas {
        constructor(nome, tipoSolo, freqRega, freqAdubo, iluminacao, tamanho) {
            let taxaCrescimento = 1.5; // Propriedade oculta

            this.nome = nome;
            this.tipoSolo = tipoSolo;
            this.freqRega = freqRega;
            this.freqAdubo = freqAdubo;
            this.iluminacao = iluminacao;
            this.tamanho = tamanho;

            this.crescimento = function() {
                return this.tamanho += taxaCrescimento;
            };
            this.poda = function() {
                return this.tamanho /= 2;
            };
        }
    }

    const suculenta = new Plantas('suculentinha', 'arenoso', 2, 1, 'sol pleno', 5);

    class Araceas extends Plantas {
        constructor(nome, tipoSolo, freqRega, freqAdubo, iluminacao, tamanho, precisaTutor) {
            super(nome, tipoSolo, freqRega, freqAdubo, iluminacao, tamanho);
            let taxaCrescimento = 5;

            this.precisaTutor = precisaTutor;

            this.crescimento = function() {
                return this.tamanho += taxaCrescimento;
            };
            this.poda = function() {
                return this.tamanho /= 3;
            };
        }
    }

    const filodendro = new Araceas('Glorioso', 'turfa', 4, 2, 'meia sombra', 50, true);

    console.log(filodendro.tamanho);
    filodendro.crescimento();
    filodendro.crescimento();
    console.log(filodendro.tamanho);
    filodendro.poda();
    console.log(filodendro.tamanho);

}

if (require.main === module) {
    main();
}