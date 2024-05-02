// Define uma função chamada substituirPalavra que aceita três argumentos: a string original, a palavra a ser substituída e a nova palavra
function substituirPalavra(s, palavraOriginal, novaPalavra) {
    // Usa o método replace() com uma expressão regular para substituir todas as ocorrências da palavra original pela nova palavra
    // A expressão regular /palavraOriginal/gi procura por todas as ocorrências da palavra original (incluindo maiúsculas e minúsculas) na string
    // O 'g' na expressão regular significa "global", fazendo com que todas as ocorrências sejam substituídas, não apenas a primeira encontrada.
    return s.replace(new RegExp(palavraOriginal, 'gi'), novaPalavra);
}

// Cria uma string de exemplo
var minhaString = "Olá, Mundo! Como você está?";

// Chama a função substituirPalavra passando minhaString, a palavra "Mundo" e a nova palavra "Terra" como argumentos
var stringSubstituida = substituirPalavra(minhaString, "Mundo", "Terra");


console.log(stringSubstituida); //mostrando no terminal

// A função substituirPalavra usa o método replace() com uma expressão regular para substituir todas as ocorrências da palavra original na string por uma nova palavra.
// A expressão regular é criada dinamicamente com o construtor RegExp, permitindo que a palavra a ser substituída seja passada como argumento.