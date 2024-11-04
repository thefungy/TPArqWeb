
import express from 'express';
import { guardar,
    actualizar,
    eliminar,
    obtenerTodos ,
    } from '../controller/turnosController.js';
const router = express.Router();


// Ruta para obtener medico por ID
// router.get('/medico/obtenerTurno', obtenerTurno);

// Ruta para obtener medico por ID
router.get('/turno/listadoTurnos', obtenerTodos);

// Ruta para crear un nuevo medico
router.post('/turno/guardar', guardar);

// Ruta para actualizar medico 
router.put('/turno/actualizar', actualizar);

// Ruta para eliminar un medico
router.delete('/turno/borrar', eliminar);


export const getRouterTurnos = () => { return router }

