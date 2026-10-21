import http from "http";

const port = 3000;

const rotas = {
    "/": "Ola Mundo",
    "/livros" : "Entrei na rota livros",
    "/autores" : "Entrei na rota autores"
}

const server = http.createServer((req, res) =>{
    res.writeHead(200, { 'content-Type': 'text/plain'})
    res.end(rotas[req.url] || "404 NOT FOUND");
});

server.listen(port, ()=>{
    console.log('Servidor rodando');
});