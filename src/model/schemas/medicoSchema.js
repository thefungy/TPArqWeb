import { DataTypes } from 'sequelize';
import { getInstance } from '../baseDeDatos.js';
const sequelize = getInstance();

export const Medico = sequelize.define('medicos', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    dni: { type: DataTypes.INTEGER, unique: true },
    especialidad: { type: DataTypes.STRING(100) },
    costoConsulta: { type: DataTypes.DOUBLE },
}, { timestamps: false });

// `sequelize.define` also returns the model
console.log(Medico === sequelize.models.medicos); // true