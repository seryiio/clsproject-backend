import { Router } from "express";
import { actualizarVelocidad, borrarVelocidad, crearVelocidadOptima, obtenerVelocidadOptima, obtenerVelocidadOptimaporEmbarcacion } from "../controller/velocidadOptima.controller.js";

const router = Router();

//CRUD VELOCIDADOPTIMA
router.get('/velocidadOptima', obtenerVelocidadOptima);
router.get('/velocidadOptima/:embarcacion', obtenerVelocidadOptimaporEmbarcacion);
router.post('/velocidadOptima', crearVelocidadOptima);
router.put('/velocidadOptima/:id', actualizarVelocidad);
router.delete('/velocidadOptima/:id', borrarVelocidad);

export default router;