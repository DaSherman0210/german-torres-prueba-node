import { Router } from "express";

import { addCarritos } from "../controllers/carritos.controllers.js";

const router = Router();

router.post("/post", addCarritos);

export default router;