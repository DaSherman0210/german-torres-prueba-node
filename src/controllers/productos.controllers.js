import getConnection from "../db/database.js";

const addProducts = async (req, res) => {
    try {

        const { id, estado, kit, barcode, nombre, presentacion, descripcion, foto, peso } = req.body;
        const data = { id, estado, kit, barcode, nombre, presentacion, descripcion, foto, peso }

        const connection = await getConnection();
        
        const barcodeValidation = await connection.query(`SELECT barcode FROM productos WHERE productos.barcode = ${barcode}`);

        if (barcodeValidation.length > 0) {
            res.json({
                msg: "Ya existe un producto con este barcode"
            });
        }

        const result = await connection.query("INSERT INTO productos SET ?", data)

        res.json({
            msg: "Se añadió con exito el producto",
            result
        });
    } catch (error) {
        console.log(error.message);
    }
}

export { addProducts };