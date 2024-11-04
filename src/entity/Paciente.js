import Usuario from "./Usuario.js";

export default class Paciente extends Usuario {

    constructor( dni, nombre, apellido) {
        super(dni, nombre, apellido);
        this.turnos
    }

    agregarTurno(t) {
        this.turnos.add(t);
    }

    getTurnos() {
        return this.turnos;
    }
}