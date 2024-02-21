import getConnection from "../db/database.js";

const addTiendaProducto = async (req, res) => {
    try {

        const { id, compra_maxima, valor, id_promocion, id_tienda, id_producto } = req.body;
        const data = { id, compra_maxima, valor, id_promocion, id_tienda, id_producto }

        const connection = await getConnection();

        const id_productoValidation = await connection.query(`SELECT id FROM productos WHERE productos.id = ${id_producto} `)

        if (id_productoValidation.length == 0) {
            res.json({
                msg: "No se encontró el producto"
            })
        }

        const id_tiendaValidation = await connection.query(`SELECT id FROM tiendas WHERE tiendas.id = ${id_tienda}`)

        if (id_tiendaValidation.length == 0) {
            res.json({
                msg: "No se encontró la tienda"
            })
        }

        const result = await connection.query(`INSERT INTO tiendas_productos SET ? `, data);

        res.json({
            msg: "Se añadió con exito el producto",
            result
        })

    } catch (error) {
        console.log(error.message);
    }
}

export { addTiendaProducto };