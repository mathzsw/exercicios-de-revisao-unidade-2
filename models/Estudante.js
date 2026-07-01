const { DataTypes } = require("sequelize");
const db = require("../db");

const Estudante = db.define("Estudante", {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Estudante;