import getConnection from "../db/database.js";


const addCarritos = async (req, res) => {

    const data = {cantidad: 1, id_producto: 1, id_tienda: 1, id_user: 1}

    const connection = await getConnection();

    const result = await connection.query(`INSERT INTO carritos SET ?`, data);

    res.json({
        msg: "Se añadió con exito el carrito",
        result
    })
}

export { addCarritos };