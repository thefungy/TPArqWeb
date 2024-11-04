import { Sequelize, DataTypes } from 'sequelize';

// Configura la conexión a MySQL
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// Función para verificar la conexión
export async function obtenerConexionBaseDeDatos() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida exitosamente.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}

export const getInstance = () => {
    return sequelize;
}

// Inicialización de la base de datos y creación de tablas
export async function inicializarBaseDeDatos() {
    // Definición del modelo USUARIO
    const Usuario = sequelize.define('Usuario', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        dni: { type: DataTypes.INTEGER,unique: true },
        nombre: { type: DataTypes.STRING(100) },
        apellido: { type: DataTypes.STRING(100) },
    }, { timestamps: false });

    // Definición del modelo MEDICO
    const Medico = sequelize.define('Medico', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        dni: { type: DataTypes.INTEGER, unique: true },
        especialidad: { type: DataTypes.STRING(100) },
        costoConsulta: { type: DataTypes.DOUBLE },
    }, { timestamps: false });

    // Definición del modelo PACIENTE
    const Paciente = sequelize.define('Paciente', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        dni: { type: DataTypes.INTEGER, unique: true },
    }, { timestamps: false });

    // Definición del modelo TURNO
    // Definición del modelo TURNO con claves foráneas
const Turno = sequelize.define('Turno', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fecha: { type: DataTypes.STRING(10) },
    hora: { type: DataTypes.STRING(6) },
    dni_medico: { 
        type: DataTypes.INTEGER,
        references: { model: Medico, key: 'dni' }
    },
    dni_paciente: { 
        type: DataTypes.INTEGER,
        references: { model: Paciente, key: 'dni' }
    },
}, { timestamps: false });

    // Relaciones entre tablas
    Medico.belongsTo(Usuario, { foreignKey: 'dni', targetKey: 'dni' });
    Paciente.belongsTo(Usuario, { foreignKey: 'dni', targetKey: 'dni' });
    Turno.belongsTo(Medico, { foreignKey: 'dni_medico', targetKey: 'dni' });
    Turno.belongsTo(Paciente, { foreignKey: 'dni_paciente', targetKey: 'dni'});

    // Sincronización con la base de datos
    try {
        await sequelize.sync({ force: true });
        console.log("La base de datos ha sido inicializada correctamente.");
    } catch (error) {
        console.error("Error al inicializar la base de datos:", error);
    }
}