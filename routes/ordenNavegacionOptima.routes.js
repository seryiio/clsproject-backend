import { Router } from "express";
import { crearOrdenNavegacionOptima, obtenerOrdenNavegacionOptima } from "../controller/ordenNavegacionOptima.controller.js";

const router = Router();

router.get('/ordenNavegacionOptima', obtenerOrdenNavegacionOptima);
router.post('/ordenNavegacionOptima', crearOrdenNavegacionOptima);

export default router;