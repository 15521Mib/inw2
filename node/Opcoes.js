function nomeComIdade(nome, idade){
    if(idade === undefined){
        console.log('Seu nome é '+nome)
    }
    else{
        console.log(`O seu nome é ${nome}, é você tem ${idade}`)
    }
}

nomeComIdade("Epamiondas")
nomeComIdade("Carla",18)
nomeComIdade(18, "Ed", 2500)

function repetiFrase(frase){
    for(let x=1; x<=5; x++){
       console.log(frase + " "+ x)
    }
}

repetiFrase("Silece pls",15)