import express from "express";
import DiretorController from "../controllers/diretoresController.js";

const routerDiretor = express.Router();

routerDiretor.get("/diretores", DiretorController.listarDiretores);
routerDiretor.get("/diretores/:id", DiretorController.listarDiretor);
routerDiretor.post("/diretores", DiretorController.cadastrarDiretor);
routerDiretor.put("/diretores/:id", DiretorController.atualizarDiretor);
routerDiretor.delete("/diretores/:id", DiretorController.excluirDiretor);

export default routerDiretor;