import { Router } from "express";
import { actualizarVelocidad, crearVelocidadOptima, obtenerVelocidadOptima, obtenerVelocidadOptimaporEmbarcacion } from "../controller/velocidadOptima.controller.js";

const router = Router();

router.get('/velocidadOptima', obtenerVelocidadOptima);
router.get('/velocidadOptima/:embarcacion', obtenerVelocidadOptimaporEmbarcacion);
router.post('/velocidadOptima', crearVelocidadOptima);
router.put('/velocidadOptima/:id', actualizarVelocidad);

export default router;