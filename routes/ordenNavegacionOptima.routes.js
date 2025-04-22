import { Router } from "express";
import { borrarOrdenNavegacionOptima, crearOrdenNavegacionOptima, obtenerOrdenNavegacionOptima } from "../controller/ordenNavegacionOptima.controller.js";

const router = Router();

router.get('/ordenNavegacionOptima', obtenerOrdenNavegacionOptima);
router.post('/ordenNavegacionOptima', crearOrdenNavegacionOptima);
router.delete('/ordenNavegacionOptima/:id', borrarOrdenNavegacionOptima);

export default router;