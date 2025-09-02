const express = require("express");
const router = express();
const jogadores = require("../models/jogadores");

router.post("/", (req, res) => {
  jogadores
    .create({
      nome: req.body.nome,
      nacionalidade: req.body.nacionalidade,
      posicao: req.body.posicao,
      clube: req.body.clube,
    })
    .then(() => {
      res.send(`Jogador cadastrado com sucesso!, Jogador: ${req.body.nome}`);
    })
    .catch((erro) => {
      res.send(`Não foi possivel cadastrar o jogador, erro: ${erro}`);
    });
});

router.get("/", (req, res) => {
  jogadores
    .findAll()
    .then((jogadores) => {
      res.json({ jogadores: jogadores });
    })
    .catch((erro) => {
      res.send(`Erro ao listar jogadores, erro: ${erro}`);
    });
});

module.exports = router;
