import express from "express";
import FilmeController from "./../controllers/filmesController.js";

const routerFilme = express.Router();

routerFilme
  .get("/filmes", FilmeController.listarFilmes)
  .get("/filmes/buscar", FilmeController.listarFilmePorTitulo)
  .get("/filmes/:id", FilmeController.listarFilme)
  .post("/filmes", FilmeController.cadastrarFilme)
  .put("/filmes/:id", FilmeController.atualizarFilme)
  .delete("/filmes/:id", FilmeController.excluirFilme);

export default routerFilme;