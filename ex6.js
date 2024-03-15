function reverso(str) {
    return str.split('').reverse().join('');
}

let palavra = prompt("Digite uma palavra:");
let palavraInvertida = reverso(palavra);

console.log("Palavra invertida: " + palavraInvertida);