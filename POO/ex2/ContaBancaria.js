class ContaBancaria {
    constructor(saldo, titular, cpf, banco) {
        this.saldo = saldo;
        this.titular = titular;
        this.cpf = cpf;
        this.banco = banco;
    }
}

module.exports = ContaBancaria;