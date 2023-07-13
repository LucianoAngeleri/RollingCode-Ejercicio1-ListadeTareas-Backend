import { Schema, model } from "mongoose";

const tareaSchema = new Schema({
    tarea: {
        type: String,
        maxLength: 100,
        minLength: 2,
        required: true
    },
});

const tarea = model("tarea", tareaSchema);

export default tarea