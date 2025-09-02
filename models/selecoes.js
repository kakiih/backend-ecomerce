const db = require("./db");
const selecoes = db.sequelize.define("selecoes", {
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  continente: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  titulomundial: {
    type: db.Sequelize.DOUBLE,
    allowNull: false,
  },
});

// selecoes.sync({ force: true });

module.exports = selecoes;
