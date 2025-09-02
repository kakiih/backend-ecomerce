const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cadastro", "root", "22120805Mf!", {
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
