const express = require("express");
const router = express.Router();
const produtos = require("../models/produtos");

router.post("/cadastro", (req, res) => {
  produtos
    .create({
      nome: req.body.nome,
      preco: req.body.preco,
      descricao: req.body.descricao,
    })
    .then(() => {
      res.send("Produto cadastrado com sucesso!");
    })
    .catch((erro) => {
      res.send(`Não foi possivel cadastrar o produto, erro: ${erro}`);
    });
});

router.get("/", (req, res) => {
  produtos
    .findAll()
    .then((produtos) => {
      res.json({ produtos: produtos });
    })
    .catch((erro) => {
      res.send(`Não foi possível listar os produtos, erro: ${erro}`);
    });
});

router.get("/:id", (req, res) => {
  produtos
    .findByPk(req.params.id)
    .then((produtos) => {
      res.json({ produtos: produtos });
    })
    .catch((erro) => {
      res.send(`Erro ao listar produtos, erro: ${erro}`);
    });
});

router.patch("/update/:id", (req, res) => {
  produtos
    .update(
      {
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao,
      },
      { where: { id: req.params.id } }
    )
    .then(() => {
      res.send(`Produto atualizado com sucesso!`);
    })
    .catch((erro) => {
      res.send(`Não foi possivel atualizar o produto, erro: ${erro}`);
    });
});

module.exports = router;
