import http from "http";

const port = 3000;

const rotas = {
    "/": "Bem-vindo à Biblioteca Escolar!",
    "/livros" : "Lista de livros disponíveis",
    "/autores" : "Conheça nossos autores",
    "/categorias" : "Consulte as categorias literárias",
    "/emprestimos" : "Histórico de empréstimos da biblioteca"
}

const server = http.createServer((req, res) =>{
    res.writeHead(200, { 'content-Type': 'text/plain'})
    res.end(rotas[req.url] || "404 - Página não encontrada");
});

server.listen(port, ()=>{
    console.log('Servidor rodando');
});