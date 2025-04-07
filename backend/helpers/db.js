const { Sequelize } = require('sequelize');
const config = require('../config.json');

module.exports = {
  Sequelize,
  initialize
};

async function initialize() {
  // Database setup code
}