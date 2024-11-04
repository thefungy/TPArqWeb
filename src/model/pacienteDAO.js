
import UsuarioDAO from'./usuarioDAO.js';
import { Paciente } from './schemas/pacienteSchema.js'

export default class PacienteDAO {
  constructor() {
    this.usuarioDAO = new UsuarioDAO();
  }

  async guardar(paciente) {
    try {

      // Guardar Usuario
      await this.usuarioDAO.guardar(paciente);

      // Guardar Paciente
      await Paciente.create({
        dni: paciente.dni
      });
      console.log('Se guardó el paciente de forma correcta');
    } catch (error) {
      throw new Error(`PacienteDAO.guardar: ${error.message}`);
    }
  }

  async obtenerTodos() {
    try {
      const pacientesData = await Paciente.findAll();
      return await Promise.all(
        pacientesData.map(async (data) => {
          const usuario = await this.usuarioDAO.obtenerPorDni(data.dni);
          return {
            dni: data.dataValues.dni,
            nombre: usuario.dataValues.nombre,
            apellido: usuario.dataValues.apellido
          };
        })
      );
    } catch (error) {
      throw new Error(`PacienteDAO.obtenerTodos: ${error.message}`);
    }
  }

  async obtenerPorDni(dni) {
    try {
      const usuario = await this.usuarioDAO.obtenerPorDni(dni);
      return {
        dni: usuario.dataValues.dni,
        nombre: usuario.dataValues.nombre,
        apellido: usuario.dataValues.apellido
      };
    } catch (error) {
      throw new Error(`PacienteDAO.obtenerPorDni: ${error.message}`);
    }
  }

  async actualizar(paciente) {
    try {
      await this.usuarioDAO.actualizar(paciente);
    } catch (error) {
      throw new Error(`PacienteDAO.actualizar: ${error.message}`);
    }
  }

  async eliminar(dni) {
    try {
      await Paciente.destroy({ where: { dni } });
      await this.usuarioDAO.eliminar(dni);
      console.log('Paciente eliminado con éxito');
    } catch (error) {
      throw new Error(`PacienteDAO.eliminar: ${error.message}`);
    }
  }
}