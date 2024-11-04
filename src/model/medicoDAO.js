import UsuarioDAO from './usuarioDAO.js';
import TurnoDAO from './turnoDAO.js';
import { Medico } from './schemas/medicoSchema.js';


export default class MedicoDAO {
  constructor() {
    this.usuarioDAO = new UsuarioDAO();
    this.turnoDAO = new TurnoDAO();
  }

  async guardar(medico) {
    try {
        // Guardar Usuario
        await this.usuarioDAO.guardar(medico);

       // Guardar Medico
       await Medico.create({
        dni: medico.dni,
        especialidad: medico.especialidad,
        costoConsulta: medico.costoConsulta
      });

      console.log('Se guardó el médico de forma correcta');
    } catch (error) {
      throw new Error(`MedicoDAO.guardar: ${error.message}`);
    }
  }

  async obtenerTodos() {
    try {
      const medicosData = await Medico.findAll();
      return await Promise.all(
        medicosData.map(async (data) => {
          const usuario = await this.usuarioDAO.obtenerPorDni(data.dni);
          return {
            dni: data.dataValues.dni,
            nombre: usuario.dataValues.nombre,
            apellido: usuario.dataValues.apellido,
            especialidad: data.dataValues.especialidad,
            costoConsulta: data.dataValues.costoConsulta,
          };
        })
      );
    } catch (error) {
      throw new Error(`MedicoDAO.obtenerTodos: ${error.message}`);
    }
  }

  async actualizar(medico) {
    try {
      await this.usuarioDAO.actualizar({
        dni: medico.dni,
        nombre: medico.nombre,
        apellido: medico.apellido
      });

      await Medico.update(
        {
          especialidad: medico.especialidad,
          costoConsulta: medico.costoConsulta
        },
        { where: { dni: medico.dni } }
      );
    } catch (error) {
      throw new Error(`MedicoDAO.actualizar: ${error.message}`);
    }
  }

  async eliminar(dni) {
    try {
      const medico = await this.obtenerPorDni(dni)
      if ( !medico ) {
        throw new Error('El medico no existe')
      }

      await Medico.destroy({ where: { dni } });
      await this.usuarioDAO.eliminar(dni);
      console.log('Médico borrado con éxito');
    } catch (error) {
      throw new Error(`MedicoDAO.eliminar: ${error.message}`);
    }
  }

  async obtenerPorDni(dni) {
    try {
      const medicoData = await Medico.findOne({ where: { dni } });

      if (!medicoData) throw new Error(`No se encontró el médico con id ${dni}`);

      const usuario = await this.usuarioDAO.obtenerPorDni(dni);

      return {
        dni: usuario.dataValues.dni,
        nombre: usuario.dataValues.nombre,
        apellido: usuario.dataValues.apellido,
        especialidad: medicoData.dataValues.especialidad,
        costoConsulta: medicoData.dataValues.costoConsulta
      };
    } catch (error) {
      throw new Error(`MedicoDAO.obtenerPorId: ${error.message}`);
    }
  }

  async tengoTurnoEnEseHorario(dni, fecha, hora) {
    try {
      const turno = await this.turnoDAO.obtenerTurno(dni, fecha, hora);
      return !!turno;
    } catch (error) {
      throw new Error(`MedicoDAO.tengoTurnoEnEseHorario: ${error.message}`);
    }
  }

  async calcularGanancias(dni, inicio, fin) {
    try {
      const turnos = await this.turnoDAO.obtenerTurnosEntreFechas(dni, inicio, fin);
      if (turnos.length === 0) throw new Error("No hay turnos en el periodo solicitado");

      const medico = await this.obtenerPorDni(dni);
      const totalGanancias = turnos.length * medico.costoConsulta;

      return `El médico ${medico.nombre} ${medico.apellido} acumuló un total de $ ${totalGanancias} en el periodo seleccionado`;
    } catch (error) {
      throw new Error(`MedicoDAO.calcularGanancias: ${error.message}`);
    }
  }
}

