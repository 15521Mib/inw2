function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimequt(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3,"Oi turma 2MIB")
.then(frase => frase.concat(' ?!?'))
.then(outraFrase => console.log(outraFrase))


