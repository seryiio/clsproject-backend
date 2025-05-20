import { Router } from "express";
import { actualizarVelocidad, actualizarVelocidades, crearVelocidadOptima, obtenerGphOptimoporEmbarcacion, obtenerRpmNominalOptimaporEmbarcacion, obtenerRpmOptimoporEmbarcacion, obtenerVelocidadNominalOptimaporEmbarcacion, obtenerVelocidadOptima, obtenerVelocidadOptimaporEmbarcacion } from "../controller/velocidadOptima.controller.js";

const router = Router();

router.get('/velocidadOptima', obtenerVelocidadOptima);
router.get('/velocidadOptima/:embarcacion', obtenerVelocidadOptimaporEmbarcacion);
router.get('/gphOptimo/:embarcacion', obtenerGphOptimoporEmbarcacion);
router.get('/rpmOptimo/:embarcacion', obtenerRpmOptimoporEmbarcacion);
router.get('/velocidadNominal/:embarcacion', obtenerVelocidadNominalOptimaporEmbarcacion);
router.get('/rpmNominal/:embarcacion', obtenerRpmNominalOptimaporEmbarcacion);
router.post('/velocidadOptima', crearVelocidadOptima);
router.put('/velocidadOptima/:id', actualizarVelocidad);
router.put('/velocidadOptima', actualizarVelocidades);

export default router;