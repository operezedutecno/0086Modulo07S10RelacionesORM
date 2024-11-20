const conexion = require("./conexion.js");
const Producto = require("./models/Producto.entity.js");
const TipoProducto = require("./models/TipoProducto.entity.js");


// Ejemplo Asíncrono
// conexion.sync().then(() =>{
//     console.log("Conexión exitosa");
// })


(async () => {
    try {
        await conexion.sync();
        console.log("Conexión exitosa");
        // Creación de tipos de productos.
        // const tipoRopa = await TipoProducto.create({ nombre: "Ropa" });
        // const tipoAlimento = await TipoProducto.create({ nombre: "Alimentos" });
        // console.log("Tipos de productos creados con éxito");

        // Creación de productos.
        // await Producto.create({ nombre: "Polera", precio: 13000, tipo_producto_id: tipoRopa.id});
        // await Producto.create({ nombre: "Jean", precio: 20000, tipo_producto_id: tipoRopa.id});
        // await Producto.create({ nombre: "Arroz", precio: 1500, tipo_producto_id: tipoAlimento.id});
        // console.log("Productos creados con éxito");



        // const listadoProductos = await Producto.findAll({
        //     where: {
        //         tipo_producto_id: 1
        //     },
        //     order: [
        //         ["precio", "DESC"]
        //     ],
        //     attributes: ["id","nombre","precio"],
        //     include: {
        //         model: TipoProducto,
        //         as: "tipoProducto",
        //         attributes: ["id"]
        //     }
        // });
        // console.table(JSON.parse(JSON.stringify(listadoProductos)));



        // const listadoTipos = await TipoProducto.findAll({
        //     include:{
        //         model: Producto,
        //         as: "productos"
        //     }
        // });

        const listadoTipos = await TipoProducto.findOne({
            where: {
                id: 2
            },
            include:{
                model: Producto,
                as: "productos"
            }
        });
        console.log(JSON.parse(JSON.stringify(listadoTipos)));

    } catch (error) {
        console.log(error.message);
    }
    
})()