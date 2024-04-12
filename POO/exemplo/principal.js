const Carro = require('./Carro');
class Principal{
    static main(){
        let meuCarro = new Carro('VW', 'Jetta', 2021);
        console.log(meuCarro.acelerar());
        console.log(meuCarro.frear());
        console.log(meuCarro.ligarFarol());
    }
}
Principal.main();