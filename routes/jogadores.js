const express = require("express");
const router = express();
const jogadores = require("../models/jogadores");

router.post("/cadastro", (req, res) => {
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

router.get("/:id", (req, res) => {
  jogadores
    .findByPk(req.params.id)
    .then((jogadores) => {
      res.json({ jogadores: jogadores });
    })
    .catch((erro) => {
      res.send(`Não foi possivel listar jogadores, erro: ${erro}`);
    });
});

router.patch("/update/:id", (req, res) => {
  jogadores
    .update(
      {
        nome: req.body.nome,
        nacionalidade: req.body.nacionalidade,
        posicao: req.body.posicao,
        clube: req.body.clube,
      },
      { where: { id: req.params.id } },
    )
    .then(() => {
      res.send(
        `O jogador de id ${req.params.id} foi atualizado com sucesso para ${req.body.nome}`
      );
    })
    .catch((erro) => {
      res.send(`Erro ao atualizar jogador, erro: ${erro}`);
    });
});

module.exports = router;
