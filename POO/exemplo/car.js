class Carro{
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

    }

    acelerar(){
        return `${this.marca} ${this.modelo} está acelerando!`;
    }

    frear(){
        return `${this.marca} ${this.modelo} está freando!`;
    }

    liganFarol(){
       reeturn `${this.marca} ${this.modelo} está ligando farol!`; 
    }


}

module.exports = Car;