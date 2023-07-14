import { Router } from "express";
import { crearTarea, obtenerTareas, obtenerTarea, borrarTarea } from "../controllers/tareas.controllers"

const router = Router();

router.route("/Tareas").get(obtenerTareas).post(crearTarea)
router.route("/Tareas/:id").get(obtenerTarea).delete(borrarTarea)

export default router;