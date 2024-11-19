const { DataTypes } = require("sequelize");
const conexion = require("./../conexion.js");


const TipoProducto = conexion.define("TipoProducto", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }
},{
    tableName:"tipos_productos",
    timestamps: false
});

module.exports = TipoProducto;