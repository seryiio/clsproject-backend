import { Router } from "express";
import { obtenerTodasEmbarcacionesEnFaena } from "../controller/clsEmbarcacionesEnFaena.controller.js";

const router = Router();

router.get('/embarcacionesFaena', obtenerTodasEmbarcacionesEnFaena);

export default router;