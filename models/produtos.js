const db = require("./db");

const produtos = db.sequelize.define("Produtos", {
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: db.Sequelize.DOUBLE,
    allowNull: false,
  },
  descricao: {
    type: db.Sequelize.TEXT,
    allowNull: false,
  },
});

// produtos.sync({ force: true });

module.exports = produtos;
