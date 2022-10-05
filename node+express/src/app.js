import express from "express";

const app = express();

app.use(express.json());

let filmes = [
  {id: 1, nome: "O Poderoso Chefão", ano: 1972},	
  {id: 2, nome: "O Poderoso Chefão II", ano: 1974},
  {id: 3, nome: "O Poderoso Chefão III", ano: 1990},
  {id: 4, nome: "O Poderoso Chefão IV", ano: 2020},
];

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/filmes', (req, res) => {
  res.status(200).send(filmes);
});

app.post('/filmes', (req, res) => {
  filmes.push(req.body);
  res.status(201).send(req.body);
});

app.get('/filmes/:id', (req, res) => {
  res.status(200).json(buscaFilme(req.params.id));
});

app.put('/filmes/:id', (req, res) => {
  let index = buscaIdFilme(req.params.id);
  filmes[index].nome = req.body.nome;
  filmes[index].ano = req.body.ano;
  res.status(200).send(filmes[index]);
});

app.delete('/filmes/:id', (req, res) => {
  let { id } = req.params;
  let index = buscaIdFilme(id);
  filmes.splice(index, 1);
  res.status(200).send(filmes);
});

function buscaFilme(id) {
  return filmes.find(filme => filme.id == id); // retorna o conteudo do array na posição em que o id é igual a solicitada
}

function buscaIdFilme(id) {
  return filmes.findIndex(filme => filme.id == id); // retorna o index do filme com o id passado
}

export default app; 