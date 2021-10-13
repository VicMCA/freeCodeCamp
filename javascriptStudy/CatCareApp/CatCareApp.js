import { Address } from './Classes/Address.js';
import { Cat } from './Classes/Cat.js';
import { Client } from './Classes/Client.js';

function main() {
    let address = ["Rua Básica", "777", "Apt 5", "10203-040",
        "Bairro Comum", "Cidade Normal", "Brasil"];

    let gato = ["Olívia", 12, "Curto","Calico", "Mel",
        "Ração para castrados", [2021, 4, 7, 6]];

    const cliente = new Client(
        "Victor Cavalcanti",
        "+55 (81) 9 8765-4321",
        "vicmca@github.com",
        new Address(
            "Regular Street",
            "777",
            "Apt 5",
            "10203-040",
            "Everyday Quarter",
            "Normal City",
            "Brazil"),
        [2021, 4, 7, 6],
        new Cat(...gato));
    console.log(cliente);
    
}

main();