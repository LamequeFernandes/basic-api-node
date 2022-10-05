import express from "express";
import db from "./config/dbConnect.js";
import filmes from "./models/Filmes.js";

db.on("error", console.log.bind(console, "connection error"));
db.once("once", () => {
  console.log("Conectado ao MongoDB");
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  filmes.find((err, filmes) => {
    res.status(200).json(filmes);
  });
});

app.get('/filmes', (req, res) => {

});

app.post('/filmes', (req, res) => {

});

app.get('/filmes/:id', (req, res) => {

});

app.put('/filmes/:id', (req, res) => {

});

app.delete('/filmes/:id', (req, res) => {

});

function buscaFilme(id) {
  return filmes.find(filme => filme.id == id); // retorna o conteudo do array na posição em que o id é igual a solicitada
}

function buscaIdFilme(id) {
  return filmes.findIndex(filme => filme.id == id); // retorna o index do filme com o id passado
}

export default app; 