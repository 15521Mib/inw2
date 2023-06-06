const leia = require("prompt-sync")()

let numero

numero = parseInt(leia("Digite um numero de inteiro positivo: "))

for(let x=1; x<=numero; x++){
    if ((x%2)==0)
    console.log(x)
}