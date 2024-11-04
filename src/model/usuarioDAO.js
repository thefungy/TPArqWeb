import { Usuario } from './schemas/usuarioSchema.js' //Importa el modelo de Usuario

export default class UsuarioDAO {
    constructor() {}

    // Método para guardar un nuevo medico
    async guardar(usuario) {
        try {
            await Usuario.create({
                dni: usuario.dni,
                nombre: usuario.nombre,
                apellido: usuario.apellido
            });
            
            console.log("Se ha guardado el usuario correctamente");
        } catch (error) {
            console.error("UsuarioDAO.guardar:", error.message);
            throw new Error("UsuarioDAO.guardar: " + error.message);
        }
    }

    // Método para eliminar un usuario por DNI
    async eliminar(dni) {
        try {
            const result = await Usuario.destroy({
                where: { dni }
            });
            if (result) {
                console.log("Usuario borrado con éxito");
            } else {
                console.log("No se encontró un usuario con el DNI proporcionado");
            }
        } catch (error) {
            console.error("UsuarioDAO.eliminar:", error.message);
            throw new Error("UsuarioDAO.eliminar: " + error.message);
        }
    }

    // Método para actualizar un usuario existente
    async actualizar(usuario) {
        try {
            await this.obtenerPorDni(usuario.dni)
            const result = await Usuario.update(
                {
                    nombre: usuario.nombre,
                    apellido: usuario.apellido
                },
                {
                    where: { dni: usuario.dni }
                }
            );
        } catch (error) {
            console.error("UsuarioDAO.actualizar:", error.message);
            throw new Error("UsuarioDAO.actualizar: " + error.message);
        }
    }

    // Método para obtener un usuario por DNI
    async obtenerPorDni(dni) {
        try {
            const usuario = await Usuario.findOne({
                where: { dni }
            });
            if (!usuario) {
                throw new Error("No se encontró el usuario con el DNI " + dni);
            }
            return usuario;
        } catch (error) {
            console.error("UsuarioDAO.obtenerPorDNI:", error.message);
            throw new Error("UsuarioDAO.obtenerPorDNI: " + error.message);
        }
    }
}