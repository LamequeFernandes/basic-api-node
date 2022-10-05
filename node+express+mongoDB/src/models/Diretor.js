import mongoose from "mongoose";

const diretorSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  dtNascimento: { type: Date, required: true },
  popularidade: { type: Number,  },
}, {
  versionKey: false
});

const diretorModel = mongoose.model("diretores", diretorSchema);

export default diretorModel;