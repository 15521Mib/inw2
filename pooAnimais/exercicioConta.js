class conta{
    constructor(numero,saldo,ativo)

Credito(valor){
    this.saldo = this.saldo + valor
}
debito(valor){

    if(valor<0){
        console.log("Impossível fazer, numero negativo...")
    }
    else if(this.saldo<valor){
        console.log("Impossivel realizar, saldo indisponivel...")
    }
    else {
        this.saldo = this.saldo - valor
    }
  }
}

//programa principal

let conta1 = new conta(15,0,true)

console.log("Saldo atual conta : "+contal.saldo)
conta1.Credito(100)
console.log("Saldo atual conta : "+conta1.saldo)
conta1.debito(50)
console.log("Saldo atual conta : "+conta1.saldo)
conta1.debito(60)
console.log("Saldo atual conta : "+conta1.saldo)