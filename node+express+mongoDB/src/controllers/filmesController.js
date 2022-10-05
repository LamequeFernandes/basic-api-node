import filme from "./../models/Filmes.js";

class FilmeController {

  static listarFilmes = (req, res) => {
    filme.find((err, filmes) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).json(filmes);
      }
    });
  }

} export default FilmeController