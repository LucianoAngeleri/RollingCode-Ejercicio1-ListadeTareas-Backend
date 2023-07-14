import Tarea from "../models/tarea";

export const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(201).json(tareas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar la lista de tareas",
    });
  }
};
export const obtenerTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    res.status(201).json(tarea);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se encontró la tarea",
    });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({
      mensaje: "La tarea se creó correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear la tarea",
    });
  }
};
export const borrarTarea = async (req, res) => {
  try {
    await Tarea.findByIdAndDelete(req.params.id)
    res.status(200).json({
      mensaje: "La tarea se borró correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al borrar la tarea",
    });
  }
};
export const editarTarea = async (req, res) => {
  try {
    await Tarea.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "La tarea se modificó correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al editar la tarea",
    });
  }
};