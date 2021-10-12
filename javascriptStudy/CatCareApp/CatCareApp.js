import { Cat } from './Classes/Cat.js';
import { Client } from './Classes/Client.js';

function main() {
    const gato = new Cat("Salomé", 12, "Short", "Color Pointed", "Victor", "Ração para Castrados");
    console.log(gato);

    const cliente = new Client();
    console.log(cliente);
}

main();