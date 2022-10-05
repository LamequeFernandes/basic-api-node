import filmeModel from "./../models/Filmes.js";

class FilmeController {

  static listarFilmes = (req, res) => {
    filmeModel.find((err, filmes) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).json(filmes);
      }
    });
  }

  static listarFilme = (req, res) => {
    filmeModel.findById(req.params.id, (err, filme) => {
      if (err) {
        res.status(404).send({ message: err.message });
      } else {
        res.status(200).json(filme);
      }
    });
  }

  static cadastrarFilme = (req, res) => {
    const filme = new filmeModel(req.body);
    filme.save((err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).json(filme);
      }
    });
  }

  static atualizarFilme = (req, res) => {
    const id = req.params.id;
    filmeModel.findByIdAndUpdate(id, req.body, (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json({ message: "Filme atualizado com sucesso!" });
      }
    });
  }

  static excluirFilme = (req, res) => {
    const id = req.params.id;
    filmeModel.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json({ message: "Filme excluído com sucesso!" });
      }
    });
  }

} export default FilmeController