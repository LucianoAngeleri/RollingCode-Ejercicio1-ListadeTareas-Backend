import { Router } from "express";
import { crearTarea, obtenerTareas } from "../controllers/tareas.controllers"

const router = Router();

router.route("/Tareas").get(obtenerTareas).post(crearTarea)

export default router;