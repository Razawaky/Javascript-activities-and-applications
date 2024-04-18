const Animal = require('/animal'); 

class Cachorro extends Animal {
    constructor(nome, raca, tamanho, peso){
        super(nome, raca, tamanho, peso);
    }

    emitirSom() {
        console.log(`${this.nome} (${this.raca}): RUF RUF`);
    }
}

// module.exports = Cachorro;