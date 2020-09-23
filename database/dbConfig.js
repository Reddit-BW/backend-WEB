const knex = require("knex");

const knexConfig = require("../knexfile");

module.exports = knex(knexConfig[process.env.DB_ENV || "development"]);
