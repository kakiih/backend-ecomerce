const express = require("express");
const app = express();
const PORT = 4040;
const selecoes = require("./models/selecoes");
const jogadores = require("./models/jogadores");
app.use(express.json());
const db = require("./models/db");

app.listen(PORT, () => {
  console.log(`servidor rodando na porta: http://localhost:${PORT}`);
});

const rotaProdutos = require("./routes/produtos");
app.use("/produtos", rotaProdutos);

app.post("/jogadores", (req, res) => {
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

app.post("/selecoes", (req, res) => {
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

// app.get("/", (req, res) => {
//   res.send("Bem vindo, entre em /jogadores ou /selecoes!");
// });
// ''
// app.get("/jogadores", (req, res) => {
//   res.json(jogadores);
// });

// app.get("/selecoes", (req, res) => {
//   res.json(selecoes);
// });
