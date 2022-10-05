import mongoose from "mongoose";

const filmeSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  producao: { type: String, required: true },
  notaImdb: { type: Number, required: true },
  diretor: { type: mongoose.Schema.Types.ObjectId, ref: 'diretores', required: true },
});

const filmeModel = mongoose.model("filmes-series", filmeSchema);

export default filmeModel;