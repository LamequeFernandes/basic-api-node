import express from "express";
import FilmeController from "./../controllers/filmesController.js";

const routerFilme = express.Router();

routerFilme.get("/filmes", FilmeController.listarFilmes);
routerFilme.get("/filmes/:id", FilmeController.listarFilme);
routerFilme.post("/filmes", FilmeController.cadastrarFilme);
routerFilme.put("/filmes/:id", FilmeController.atualizarFilme);
routerFilme.delete("/filmes/:id", FilmeController.excluirFilme);

export default routerFilme;