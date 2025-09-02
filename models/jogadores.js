const db = require("./db");

const jogadores = db.sequelize.define("jogadores", {
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  nacionalidade: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  posicao: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  clube: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
});

// jogadores.sync({ force: true });

module.exports = jogadores;
