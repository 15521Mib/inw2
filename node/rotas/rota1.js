const http = require('http');
const server = http.createServer(function(request, response){
    response.writeHead(200,{"content-Type":"text/html"});
    if(request.url == "/"){
        response.write("<h1>Página principal ou raiz</h1>")
    }
    else if(request.url == "/login"){
        response.write("<h1>Acesso ao login do projeto</h1>")
    }
    else {
        response.write("A página que vocé está procurando não esxite");
    }
    response.end();
})

const port = 3000;
server.listen(port,()=>{
    console.log(`Servidor rodando ma porta ${port}`);
});