const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Trainer = db.define("Trainer", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Pokemon = require("./Pokemon");



module.exports = Trainer;