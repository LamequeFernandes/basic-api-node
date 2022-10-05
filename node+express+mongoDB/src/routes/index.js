import express from "express";
import routerDiretor from "./diretoresRoutes.js";
import routerFilme from "./filmesRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Bem vindo a API de Filmes");
  });

  app.use(
    express.json(),
    routerFilme,
    routerDiretor
  );
} 

export default routes;