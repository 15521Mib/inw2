const fs = require('fs')

fs.readFileSync('/index.html'), (erro, arquivo)=>{
    if(erro) {
        throw error
    }
    else {
        console.log(arquivo)
    }
}

var arquivo = fs.readFileSync('/index.html');
console.log(arquivo);