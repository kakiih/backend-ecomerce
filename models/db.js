const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("cadastro", process.env.DB_USER , process.env.DB_PASS, {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Banco de dados conectado com sucesso!");
  })
  .catch((erro) => {
    console.log(`Erro ao conectar ao banco de dados ${erro}`);
  });

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
