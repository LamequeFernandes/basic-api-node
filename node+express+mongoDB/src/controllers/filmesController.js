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


} export default FilmeController