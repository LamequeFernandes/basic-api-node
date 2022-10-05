import express from "express";
import FilmeController from "./../controllers/filmesController.js";

const routerFilme = express.Router();

routerFilme.get("/filmes", FilmeController.listarFilmes);

export default routerFilme;