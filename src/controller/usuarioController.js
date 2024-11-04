import UsuarioDAO from "../model/usuarioDAO.js";

const usuarioDao = new UsuarioDAO();

export const createUser = async(req, res) => {
    const { dni, nombre, apellido } = req.body;

    const data = {
        dni: '38658340',
        nombre: 'bruno',
        apellido: 'bonino'
    }

    try {
        await usuarioDao.guardar(data);
        res.status(201).json({ message: "Usuario creado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear usuario", error: error.message });
    }
}