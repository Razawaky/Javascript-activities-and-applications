function contarVogais(s) { //aceita a string s como parâmetro
    // Usa o método match() para encontrar todas as vogais na string
    // A expressão regular /[aeiou]/gi procura por todas as vogais (maiúsculas e minúsculas) na string
    var vogaisEncontradas = s.match(/[aeiou]/gi);

    // Se nenhuma vogal for encontrada, match() retorna null. Nesse caso, retorna 0
    if (vogaisEncontradas === null) {
        return 0;
    }

    // Retorna o comprimento do array de vogais encontradas, que é o número de vogais na string
    return vogaisEncontradas.length;
}

let frase1 = "Eu amo você";

let numeroDeVogais = contarVogais(frase1);

console.log(numeroDeVogais);