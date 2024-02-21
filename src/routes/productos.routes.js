import { Router } from "express";
import { check } from "express-validator";
import { validateDocuments } from "../middlewares/validate.documents.js";

import { addProducts } from "../controllers/productos.controllers.js";

const router = Router();

router.post("/post", [
    check("barcode","El estado no es valido").notEmpty(),
    check("nombre","El nombre no es valido").notEmpty().isLength({max: 60}),
    check("barcode","El barcode no es valido").notEmpty(),
    check("presentacion","La presentacion no es valida").notEmpty().isLength({max: 25}),
    validateDocuments
] , addProducts);

export default router;