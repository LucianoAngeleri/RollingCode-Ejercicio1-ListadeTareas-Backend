import { Router } from "express";
import { crearTarea, obtenerTareas, obtenerTarea } from "../controllers/tareas.controllers"

const router = Router();

router.route("/Tareas").get(obtenerTareas).post(crearTarea)
router.route("/Tareas/:id").get(obtenerTarea)

export default router;