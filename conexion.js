const { Sequelize } = require("sequelize");

const conexion = new Sequelize({
    host: 'localhost',
    port: 5432,
    database: 'orm_relaciones',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres'
});

module.exports = conexion;