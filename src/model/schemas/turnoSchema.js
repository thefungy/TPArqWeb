import { DataTypes } from 'sequelize';
import { getInstance } from '../baseDeDatos.js';
const sequelize = getInstance();

export const Turno = sequelize.define('turnos', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fecha: { type: DataTypes.STRING(10) },
    hora: { type: DataTypes.STRING(6) },
    dni_medico: { type: DataTypes.INTEGER },
    dni_paciente: { type: DataTypes.INTEGER },
}, { timestamps: false });

// `sequelize.define` also returns the model
console.log(Turno === sequelize.models.turnos); // true