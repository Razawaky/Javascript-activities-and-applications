function fatorial(n) {
    if (n === 0) {
      return 1;
    }
    let r = n;
    while (n > 1) {
      n--;
      r *= n;
    }
    return r;
  }

let n = parseInt(prompt("Digite o numero"));

let f = fatorial(n);

console.log("O fatorial de " + n + " é: " + f);