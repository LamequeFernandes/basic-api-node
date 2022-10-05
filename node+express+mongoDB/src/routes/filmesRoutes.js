import express from "express";
import FilmeController from "./../controllers/filmesController.js";

const routerFilme = express.Router();

routerFilme.get("/filmes", FilmeController.listarFilmes);
routerFilme.post("/filmes", FilmeController.cadastrarFilme);

export default routerFilme;