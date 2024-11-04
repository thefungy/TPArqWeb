
import PacienteDAO from "../model/pacienteDAO.js"
import TurnoDAO from "../model/turnoDAO.js"
import Paciente from '../entity/Paciente.js'

const pacienteDAO = new PacienteDAO();


export const guardar = async(req, res) => {
    console.log('aCAAA')
    const { dni, nombre, apellido } = req.body;

    try {
        const paciente = new Paciente(dni,nombre,apellido);
        await pacienteDAO.guardar(paciente);
        res.status(200).json({ message: "Paciente creado con éxito" });
    } catch (e) {
        res.status(500).json({ message: "Error al crear Paciente", error: e.message });
    }
}

export const eliminar = async(req, res) => {
    const { dni } = req.body;
    try {
        await pacienteDAO.eliminar(dni);
        res.status(200).json({ message: "Paciente eliminado con éxito" });
    } catch (e) {
        res.status(500).json({ message: "Error al eliminar Paciente", error: e.message });
    }
}

export const actualizar =  async(req, res) => {
    const { dni, nombre, apellido } = req.body;
    try {
        const paciente = new Paciente(dni,nombre,apellido);
        await pacienteDAO.actualizar(paciente);
        res.status(200).json({ message: "Paciente actualizado con éxito" });
    } catch (e) {
        res.status(500).json({ message: "Error al actualizar Paciente", error: e.message });
    }
}

export const obtenerPorDni = async(req, res) => {
    try {
        const { dni } = req.body;
        const paciente =  await pacienteDAO.obtenerPorDni(dni);
        res.status(200).json({ message: "Paciente encontrado", data: paciente });
    } catch (e) {
        res.status(500).json({ message: "Error al encontrar paciente", error: e.message });
    }
}

export const obtenerTodos = async(req, res) => {
    try {
        const pacientes = await pacienteDAO.obtenerTodos();
        res.status(200).json({ message: "Listado de pacientes", data: pacientes });
    } catch (e) {
        res.status(500).json({ message: "Error al listar pacientes", error: e.message });
    }
}

