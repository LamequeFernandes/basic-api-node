import diretorModel from "./../models/Diretor.js";

class DiretorController {

  static listarDiretores = (req, res) => {
    diretorModel.find((err, Diretores) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).json(Diretores);
      }
    });
  }

  static listarDiretor = (req, res) => {
    diretorModel.findById(req.params.id, (err, Diretor) => {
      if (err) {
        res.status(404).send({ message: err.message });
      } else {
        res.status(200).json(Diretor);
      }
    });
  }

  static cadastrarDiretor = (req, res) => {
    const Diretor = new diretorModel(req.body);
    Diretor.save((err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).json(Diretor);
      }
    });
  }

  static atualizarDiretor = (req, res) => {
    const id = req.params.id;
    diretorModel.findByIdAndUpdate(id, req.body, (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json({ message: "Diretor atualizado com sucesso!" });
      }
    });
  }

  static excluirDiretor = (req, res) => {
    const id = req.params.id;
    diretorModel.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json({ message: "Diretor excluído com sucesso!" });
      }
    });
  }

} export default DiretorController