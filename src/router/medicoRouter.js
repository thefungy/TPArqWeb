import { 
    actualizar,
    calcularGanancias,
    eliminar,
    guardar,
    obtenerPorDni,
    obtenerTodos,
    obtenerTurnosPorFecha } from '../controller/medicoController.js';
import express from 'express';
//Creo un router con express
const router = express.Router();

// Ruta para obtener medico por DNI
router.get('/medico/obtenerPorDni', obtenerPorDni);

// Ruta para obtener ganacias de un medico
router.get('/medico/obtenerGanancias', calcularGanancias);

// Ruta para obtener listado de medico
router.get('/medico/obtenerMedicos', obtenerTodos);

// Ruta para obtener lista de turnos por fecha
router.get('/medico/obtenerTurnosPorFecha', obtenerTurnosPorFecha);

// Ruta para crear un nuevo medico
router.post('/medico/guardar', guardar);

// Ruta para actualizar medico 
router.put('/medico/actualizar', actualizar);

// Ruta para eliminar un medico
router.delete('/medico/borrar', eliminar);


export const getRouterMedico = () => { return router }

