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

router.get("/:id", (req, res) => {
  selecoes
    .findByPk(req.params.id)
    .then((selecoes) => {
      res.json({ selecoes: selecoes });
    })
    .catch((erro) => {
      res.send(`Erro ao listar a seleção, erro: ${erro}`);
    });
});

router.patch("/update/:id", (req, res) => {
  selecoes
    .update(
      {
        nome: req.body.nome,
        continente: req.body.titulomundial,
        titulomundial: req.body.titulomundial,
      },
      { where: { id: req.params.id } }
    )
    .then(() => {
      res.send(
        `A seleção de id ${req.params.id} foi atualizada com sucesso para ${req.body.nome}`
      );
    })
    .catch((erro) => {
      res.send(`Erro ao atualizar seleção, erro: ${erro}`);
    });
});

router.delete("/delete/:id", (req, res) => {
  selecoes
    .destroy({ where: { id: req.params.id } })
    .then(() => {
      res.send("Seleção deletada com sucesso!");
    })
    .catch((erro) => {
      res.send(`Erro ao deletar seleção, erro: ${erro}`);
    });
});

module.exports = router;
