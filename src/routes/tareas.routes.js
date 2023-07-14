import { Router } from "express";
import { crearTarea, obtenerTareas, obtenerTarea, borrarTarea, editarTarea } from "../controllers/tareas.controllers";

const router = Router();

router.route("/Tareas").get(obtenerTareas).post(crearTarea);
router.route("/Tareas/:id").get(obtenerTarea).delete(borrarTarea).put(editarTarea);

export default router;