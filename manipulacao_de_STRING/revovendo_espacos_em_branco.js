function removerEspacos(s) {
    // Usa o método replace() com uma expressão para substituir todos os espaços em branco 
    return s.replace(/\s+/g, '');
}


let exemplo = "Será que eu estou mesmo vivo?";

// Chama a função removerEspacos passando variavel exemplo como argumento
var stringSemEspacos = removerEspacos(exemplo);


console.log(stringSemEspacos); //imprime no terminal

// A função removerEspacos usa o método replace() com uma expressão regular para substituir todos os espaços em branco na string por nada, efetivamente os removendo

// [nota] A expressão regular /\s+/g procura por um ou mais espaços em branco (incluindo espaços, tabulações, etc.)
// O 'g' na expressão regular significa "global", fazendo com que todos os espaços em branco sejam substituídos, não apenas o primeiro encontrado