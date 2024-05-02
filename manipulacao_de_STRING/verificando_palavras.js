function comecaCom(palavra, letra) { // Define uma função chamada comecaCom que aceita duas strings como argumentos: a palavra e a letra
    // Usa o método startsWith() para verificar se a palavra começa com a letra especificada
    // Retorna verdadeiro se a palavra começar com a letra, e falso caso contrário
    return palavra.startsWith(letra);
}

// Cria uma palavra de exemplo
var minhaPalavra = "Olá";

// Chama a função comecaCom passando minhaPalavra e a letra "O" como argumentos
var resultado = comecaCom(minhaPalavra, "O");

console.log(resultado);

// Comentário explicando a função:
// A função comecaCom usa o método startsWith() para verificar se a palavra começa com a letra especificada.
// Isso é útil para verificar se uma palavra começa com uma determinada letra, retornando verdadeiro ou falso.