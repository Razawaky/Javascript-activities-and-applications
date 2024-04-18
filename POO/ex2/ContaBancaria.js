class ContaBancaria {
    constructor(saldo, titular, data, cpf, banco) {
        this.saldo = saldo;
        this.titular = titular;
        this.data =  data;
        this.cpf = cpf;
        this.banco = banco;
    }

    depositar(){
        return `${this.saldo} ${this.titular} ${this.data}`;
    }

    sacar(){
        return `${this.saldo} ${this.titular} ${this.data}`;
    }

    verificarSaldo(){
        return `${this.saldo} ${this.titular} ${this.data} ${this.banco}`;

    }
}


// module.exports = ContaBancaria;