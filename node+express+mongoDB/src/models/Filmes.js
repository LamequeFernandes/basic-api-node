import mongoose from "mongoose";

const filmeSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  producao: { type: String, required: true },
  notaImdb: { type: Number, required: true },
});

const filme = mongoose.model("filmes-series", filmeSchema);

export default filme;