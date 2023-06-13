const leia = require("prompt-sync")()

//variaveis
let numero = 0
let contador = 0
let total = 0
let MaiorNumero = 0

do {
    total = total + numero
    if(numero>MaiorNumero){
        MaiorNumero = numero
    }
    contador++
    numero = parseInt(leia("Digite um número : "))

}while(numero>0)
console.log("total : "+total)
console.log("Maior numero : "+MaiorNumero)