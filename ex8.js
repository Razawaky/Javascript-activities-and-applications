console.log('Seja bem-vindo ao jogo!');
let secreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 5;

for (let i = 1; i <= tentativas; i++) {
    let u = parseInt(prompt('Tente adivinhar o número (entre 1 e 10):'));

    if (u === secreto) {
        console.log('Parabéns! Você acertou o número. Era ' + secreto);
        break;
    } else {
        console.log('Você errou. Tente novamente.');
    }
}

if (i > tentativas) {
    console.log('Suas tentativas acabaram. O número secreto era ' + secreto);
}
