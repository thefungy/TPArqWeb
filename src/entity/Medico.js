import Usuario from './Usuario.js'


export default class Medico extends Usuario {
    // Constructor
    constructor (dni, nombre, apellido, especialidad, costoConsulta) {
        super(dni, nombre, apellido);

        this.especialidad;
        this.costoConsulta
        this.turnos;

        this.setEspecialidad(especialidad);
        this.setCostoConsulta(costoConsulta);
    }

    // Getters y setters
    getEspecialidad() {
        return this.especialidad;
    }
    getCostoConsulta() {
        return this.costoConsulta;
    }
    agregarTurno(t) {
        this.turnos.add(t);
    }
    toString() {
        return this.getDni() + " - " + this.getNombre()+ " " + this.getApellido()+ " - " + this.getEspecialidad() ;
    }
    getTurnos() {
        return this.turnos;
    }

    setEspecialidad(especialidad) {
        if( !especialidad ) {
            throw new Error("La especialidad no puede ser nulo o vacio");
        }
        this.especialidad = especialidad;
    }

    setCostoConsulta( costoConsulta ) {
        console.log(costoConsulta);
        if( costoConsulta <= 0 || costoConsulta == undefined) {
            throw new Error("El costo de la consulta no puede ser menor o igual que 0");
        }
        this.costoConsulta = costoConsulta;
    }
}