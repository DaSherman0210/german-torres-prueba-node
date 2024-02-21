import { Router } from "express";
import { check } from "express-validator";
import { validateDocuments } from "../middlewares/validate.documents.js";

import { addTiendaProducto } from "../controllers/tiendas_productos.controllers.js";

const router = Router();

router.post("/post", [
    check("compra_maxima","La compar_maxima no es valida").notEmpty().isNumeric(),
    check("valor","El valor no es valido").notEmpty(),
    check("id_tienda","El id_tienda no es valido").notEmpty(),
    check("id_producto","El id_producto no es valido").notEmpty(),
    validateDocuments
] , addTiendaProducto);

export default router;