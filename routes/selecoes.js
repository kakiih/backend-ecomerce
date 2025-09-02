const express = require("express");
const router = express();
const selecoes = require("../models/selecoes");

router.post("/cadastro", (req, res) => {
  selecoes
    .create({
      nome: req.body.nome,
      continente: req.body.continente,
      titulomundial: req.body.titulomundial,
    })
    .then(() => {
      res.send(`Seleção cadastrada com sucesso!, seleção: ${req.body.nome}`);
    })
    .catch((erro) => {
      res.send(`Não foi possível cadastrar a seleção, erro: ${erro}`);
    });
});

router.get("/", (req, res) => {
  selecoes
    .findAll()
    .then((selecoes) => {
      res.json({ selecoes: selecoes });
    })
    .catch((erro) => {
      res.send(`Erro ao listar selecoes, erro: ${erro}`);
    });
});

module.exports = router;
