require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`servidor rodando na porta: http://localhost:${PORT}`);
});

const rotaProdutos = require("./routes/produtos");
app.use("/produtos", rotaProdutos);

const rotaJogadores = require("./routes/jogadores");
app.use("/jogadores", rotaJogadores);

const rotaSelecoes = require("./routes/selecoes");
app.use("/selecoes", rotaSelecoes);
