import { DataTypes } from 'sequelize';
import { getInstance } from '../baseDeDatos.js';
const sequelize = getInstance();

export const Usuario = sequelize.define('usuarios', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    dni: { type: DataTypes.INTEGER, unique: true },
    nombre: { type: DataTypes.STRING(100) },
    apellido: { type: DataTypes.STRING(100) },
}, { 
    tableName: 'usuarios',
    timestamps: false 
});

// `sequelize.define` also returns the model
console.log(Usuario === sequelize.models.usuarios); // true