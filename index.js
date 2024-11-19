const conexion = require("./conexion.js");
const Producto = require("./models/Producto.entity.js");


// Ejemplo Asíncrono
// conexion.sync().then(() =>{
//     console.log("Conexión exitosa");
// })


(async () => {
    try {
        await conexion.sync();
        console.log("Conexión exitosa");

        const listadoProductos = await Producto.findAll();

        console.log(listadoProductos);
    } catch (error) {
        console.log(error.message);
    }
    
})()