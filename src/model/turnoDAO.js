import { Usuario } from './schemas/usuarioSchema.js'
import { Turno } from './schemas/turnoSchema.js'
import { Medico } from './schemas/medicoSchema.js'
import { Paciente } from './schemas/pacienteSchema.js'
import { Op } from 'sequelize';


export default class TurnoDAO {
    constructor() {}

    async guardar(turno) {
        try {
            await this.validarTurno(turno);
            await Turno.create({
                fecha: turno.getFecha(),
                hora: turno.getHora(),
                dni_medico: turno.getMedico(),
                dni_paciente: turno.getPaciente(),
            });
            console.log("Turno guardado correctamente");
        } catch (error) {
            console.error("TurnoDAO.guardar:", error);
            throw new Error(`TurnoDAO.guardar: ${error.message}`);
        }
    }

    async obtenerTodos() {
        try {
            return await Turno.findAll();
        } catch (error) {
            console.error("TurnoDAO.obtenerTodos:", error);
            throw new Error(`TurnoDAO.obtenerTodos: ${error.message}`);
        }
    }

    async obtenerTurnosPorFecha(dni, fecha) {
        try {
            return await Turno.findAll({
                where: { dni_medico: dni, fecha },
            });
        } catch (error) {
            console.error("TurnoDAO.obtenerTurnosPorFecha:", error);
            throw new Error(`TurnoDAO.obtenerTurnosPorFecha: ${error.message}`);
        }
    }

    async obtenerTurnosEntreFechas(dni, inicio, fin) {
        try {
            return await Turno.findAll({
                where: {
                    dni_medico: dni,
                    fecha: { [Op.between]: [inicio, fin] }
                },
            });
        } catch (error) {
            console.error("TurnoDAO.obtenerTurnosEntreFechas:", error);
            throw new Error(`TurnoDAO.obtenerTurnosEntreFechas: ${error.message}`);
        }
    }


    async obtenerTurno(turno) {
        try {
            return await Turno.findAll({
                where: {
                    dni_medico: dni,
                    fecha: { [Op.between]: [inicio, fin] }
                },
                include: [
                    { model: Medico, as: 'medico' },
                    { model: Paciente, as: 'paciente' }
                ]
            });
        } catch (error) {
            console.error("TurnoDAO.obtenerTurnosEntreFechas:", error);
            throw new Error(`TurnoDAO.obtenerTurnosEntreFechas: ${error.message}`);
        }
    }

    async eliminar(turno) {
        try {
            await Turno.destroy({ where: {
                fecha: turno.getFecha(),
                hora: turno.getHora(),
                dni_paciente: turno.getPaciente(),
                dni_medico: turno.getMedico()
            } });
            console.log("Turno eliminado correctamente");
        } catch (error) {
            console.error("TurnoDAO.eliminar:", error);
            throw new Error(`TurnoDAO.eliminar: ${error.message}`);
        }
    }

    async validarTurno(turno) {
        try {
            const existente = await Turno.findOne({
                where: {
                    fecha: turno.getFecha(),
                    hora: turno.getHora(),
                    dni_medico: turno.getMedico()
                }
            });
            
            if (existente) {
                throw new Error("El médico tiene un turno agendado para ese horario");
            }
        } catch (error) {
            console.error("TurnoDAO.validarTurno:", error);
            throw new Error(`TurnoDAO.validarTurno: ${error.message}`);
        }
    }

    async recuperarTurnosMedico(idMedico) {
        try {
            return await Turno.findAll({
                where: { dni_medico: idMedico },
                include: [
                    { model: Medico, as: 'medico' },
                    { model: Paciente, as: 'paciente' }
                ]
            });
        } catch (error) {
            console.error("TurnoDAO.recuperarTurnosMedico:", error);
            throw new Error(`TurnoDAO.recuperarTurnosMedico: ${error.message}`);
        }
    }

    async actualizar(turno) {
        console.log(turno)
        try {
            const result = await Turno.update(
                {
                    fecha: turno.getFecha(),
                    hora: turno.getHora()
                },
                {
                    where: { 
                        dni_medico: turno.getMedico(),
                        dni_paciente: turno.getPaciente()
                    }
                }
            );
        } catch (error) {
            console.error("TurnoDAO.actualizar:", error.message);
            throw new Error("TurnoDAO.actualizar: " + error.message);
        }
    }
    
}
