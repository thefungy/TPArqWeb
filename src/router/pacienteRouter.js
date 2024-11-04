import { 
    actualizar,
    eliminar,
    guardar,
    obtenerPorDni,
    obtenerTodos} from '../controller/pacienteController.js';
import express from 'express';
const router = express.Router();

// Ruta para obtener paciente por ID
router.get('/paciente/obtenerPorDni', obtenerPorDni);

// Ruta para obtener listado de pacientes
router.get('/paciente/obtenerPacientes', obtenerTodos);

// Ruta para crear un nuevo paciente
router.post('/paciente/guardar', guardar);

// Ruta para actualizar paciente 
router.put('/paciente/actualizar', actualizar);

// Ruta para eliminar un paciente
router.delete('/paciente/borrar', eliminar);


export const getRouterPaciente = () => { return router }




