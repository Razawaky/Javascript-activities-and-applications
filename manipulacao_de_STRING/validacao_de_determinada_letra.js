const palavra  = "cansado";
let  letra    = "a";

function terminaComLetra(palavra, letra) { //verifica se termina com determinada letra
    return palavra.endsWith(letra); //retorna método endsWith para verificar se a palavra termina com alguma letra especifica
}

let resultado = terminaComLetra(palavra, letra);
console.log(`A palavra "${palavra}" termina com a letra "${letra}"? ${resultado}`);