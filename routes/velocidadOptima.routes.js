import { Router } from "express";
import { actualizarVelocidad, crearVelocidadOptima, obtenerGphOptimoporEmbarcacion, obtenerRpmOptimoporEmbarcacion, obtenerVelocidadOptima, obtenerVelocidadOptimaporEmbarcacion } from "../controller/velocidadOptima.controller.js";

const router = Router();

router.get('/velocidadOptima', obtenerVelocidadOptima);
router.get('/velocidadOptima/:embarcacion', obtenerVelocidadOptimaporEmbarcacion);
router.get('/gphOptimo/:embarcacion', obtenerGphOptimoporEmbarcacion);
router.get('/rpmOptimo/:embarcacion', obtenerRpmOptimoporEmbarcacion);
router.post('/velocidadOptima', crearVelocidadOptima);
router.put('/velocidadOptima/:id', actualizarVelocidad);

export default router;