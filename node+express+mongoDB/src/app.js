import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "connection error"));
db.once("once", () => {
  console.log("Conectado ao MongoDB");
});

const app = express();

app.use(express.json());

routes(app);

export default app; 