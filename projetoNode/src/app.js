import express from "express";

const app = express();

//Simulando BD
const livros = [
    {
        id: 1,
        titulo: "Programando em JS"
    },
    {
        id: 2,
        titulo: "Programando em Java"
    }
];

app.get("/", (req, res) =>{
    res.status(200).send("NODE JS");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;