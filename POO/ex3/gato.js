const Animal = require('/animal');

class Gato extends Animal {
    constructor(nome, raca, tamanho, peso){
        super(nome, raca, tamanho, peso);
    }

    emitirSom() {
        console.log(`${this.nome} (${this.raca}): Meow Meow`);
    }
}

// module.exports = Gato;