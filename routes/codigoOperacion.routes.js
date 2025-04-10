import { Router } from "express";
import { actualizarVelocidad, borrarVelocidad, crearVelocidadOptima, obtenerVelocidadOptima } from "../controller/velocidadOptima.controller.js";
import { obtenerCodigoOperacionPorFechaYEmbarcacion, obtenerCodigosOperacion } from "../controller/codigoOperacion.controller.js";

const router = Router();

router.get('/codigoOperacion/', obtenerCodigosOperacion);
router.get('/codigoOperacion/:Embarcación', obtenerCodigoOperacionPorFechaYEmbarcacion);

export default router;