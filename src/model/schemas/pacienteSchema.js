import { DataTypes } from 'sequelize';
import { getInstance } from '../baseDeDatos.js';
const sequelize = getInstance();

export const Paciente = sequelize.define('pacientes', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    dni: { type: DataTypes.INTEGER, unique: true },
}, { timestamps: false });

// `sequelize.define` also returns the model
console.log(Paciente === sequelize.models.pacientes); // true