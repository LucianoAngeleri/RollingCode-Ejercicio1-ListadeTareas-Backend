import { Router } from "express";
import { crearTarea, obtenerTareas, obtenerTarea, borrarTarea, editarTarea } from "../controllers/tareas.controllers"

const router = Router();

router.route("/tareas").get(obtenerTareas).post(crearTarea)
router.route("/tareas/:id").get(obtenerTarea).delete(borrarTarea).put(editarTarea)

export default router;