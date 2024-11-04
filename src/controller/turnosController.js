
import Turno from '../entity/Turno.js'
import TurnoDAO from "../model/turnoDAO.js"
const turnoDAO = new TurnoDAO();

export const guardar = async(req, res) => {
    const { fecha, hora, dni_medico, dni_paciente } = req.body;

    try {
        const turno = new Turno(fecha,hora, dni_medico, dni_paciente);
        console.log(turno.toString());
        await turnoDAO.guardar(turno);
        res.status(200).json({ message: "Turno creado con éxito" });
    } catch (e) {
        res.status(500).json({ message: "Error al crear Turno", error: e.message });
    }
}

export const eliminar = async(req, res) => {
    const { fecha, hora, dni_paciente, dni_medico } = req.body;
    try {
        const turno = new Turno(fecha,hora,dni_medico, dni_paciente );
        await turnoDAO.eliminar(turno);
        res.status(200).json({ message: "Turno eliminado con éxito" });
    } catch (e) {
        res.status(500).json({ message: "Error al eliminar turno", error: e.message });
    }
}

export const actualizar =  async(req, res) => {
    const { fecha, hora, dni_medico, dni_paciente } = req.body;

    try {
        const turno = new Turno( fecha,hora,dni_medico ,dni_paciente );
        await turnoDAO.actualizar(turno);
        res.status(200).json({ message: "Turno actualizado con éxito" });
    } catch (e) {
        res.status(500).json({ message: "Error al actualizar Turno", error: e.message });
    }
}

// export const obtenerTurno = async(req, res) => {
//     try {
//         const { fecha, hora, dni_paciente, dni_medico } = req.body;
//         const turno = new Turno(fecha,hora,dni_medico,dni_paciente);
//         const turnos =  await turno.obtenerPorId(turno);
//         res.status(200).json({ message: "turno encontrado", data: turnos });
//     } catch (e) {
//         res.status(500).json({ message: "Error al encontrar turno", error: e.message });
//     }
// }

export const obtenerTodos = async(req, res) => {
    try {
        const turnos = await turnoDAO.obtenerTodos();
        res.status(200).json({ message: "Listado de turnos", data: turnos });
    } catch (e) {
        res.status(500).json({ message: "Error al listar turno", error: e.message });
    }
}

