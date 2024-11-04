
import MedicoDAO from "../model/medicoDAO.js"
import TurnoDAO from "../model/turnoDAO.js"
import Medico from '../entity/Medico.js'

const medicoDAO = new MedicoDAO();
const turnoDAO = new TurnoDAO();

//recibo los datos de un medico y se lo paso al modelo para que lo guarde en la BBDD
export const guardar = async(req, res) => {  
    const { dni, nombre, apellido,especialidad,costoConsulta } = req.body;
    
    try {
        const medico = new Medico(dni,nombre,apellido,especialidad,costoConsulta);
        await medicoDAO.guardar(medico);
        res.status(200).json({ message: "Medico creado con éxito" });
    } catch (e) {
        res.status(500).json({ message: "Error al crear medico", error: e.message });
    }
}

export const eliminar = async(req, res) => {
    const { dni} = req.body;

    try {
        await medicoDAO.eliminar(dni);
        res.status(200).json({ message: "Medico eliminado con éxito" });
    } catch (e) {
        res.status(500).json({ message: "Error al eliminar medico", error: e.message });
    }
    
}

export const actualizar =  async(req, res) => {
    const { dni, nombre, apellido,especialidad,costoConsulta } = req.body;
    try {
        const medico = new Medico(dni,nombre,apellido,especialidad,costoConsulta);
        await medicoDAO.actualizar(medico);
        res.status(200).json({ message: "Medico actualizado con éxito" });
    } catch (e) {
        res.status(500).json({ message: "Error al actualizar medico", error: e.message });
    }
}

export const obtenerPorDni = async(req, res) => {
    try {
        const { dni } = req.body;
        const medico =  await medicoDAO.obtenerPorDni(dni);
        res.status(200).json({ message: "Medico encontrado", data: medico });
    } catch (e) {
        res.status(500).json({ message: "Error al encontrar medico", error: e.message });
    }
}

export const obtenerTodos = async(req, res) => {
    try {
        const medicos = await medicoDAO.obtenerTodos();
        res.status(200).json({ message: "Listado de medicos", data: medicos });
    } catch (e) {
        res.status(500).json({ message: "Error al listar medicos", error: e.message });
    }
}

export const obtenerTurnosPorFecha = async(req, res) => {
    const { dni, fecha } = req.body;
    try {
        validarFecha(fecha)
        const turnos =  await turnoDAO.obtenerTurnosPorFecha(dni,fecha);
        res.status(200).json({ message: "Turnos encontrados", data: turnos });
    } catch (e) {
        res.status(500).json({ message: "Error al actualizar medico", error: e.message });
    }
}

export const calcularGanancias =  async(req, res) => {
    const { dniMedico, fechaInicio, fechaFin } = req.body;

    try {
        validarFecha(fechaInicio)
        validarFecha(fechaFin)
        const ganancia = await medicoDAO.calcularGanancias(dniMedico,fechaInicio,fechaFin);
        res.status(200).json({ message: "Ganancia del medico", data: `${ganancia}` });
    } catch (e) {
        res.status(500).json({ message: "Error al buscar ganancia del medico", error: e.message });
    }
}

const validarFecha = ( fecha ) => {
     //uso la expresion regular para que le de formato fecha dd-mm-yyyy
     const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/;
     if ( !regex.test(fecha) ) {
         throw new Error("La fecha ingresada es incorrecta. Formato dd-mm-yyyy");
     }
}

