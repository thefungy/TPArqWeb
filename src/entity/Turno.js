import { Error } from "sequelize";

export default class Turno {

    constructor( fecha,  hora, medico,  paciente ) {
        this.fecha;
        this.hora;
        this.dni_medico;
        this.dni_paciente;

        this.setFecha(fecha);
        this.setHora(hora);
        this.setMedico(medico);
        this.setPaciente(paciente);
    }

    toString() {
        return "Turno{" +
                "fecha='" + this.fecha + '\'' +
                ", hora='" + this.hora + '\'' +
                ", medico=" + this.dni_medico +
                ", paciente=" + this.dni_paciente +
                '}';
    }

    getFecha() {
        return this.fecha;
    }

    setFecha(fecha) {
        //uso la expresion regular para que le de formato fecha dd-mm-yyyy
        const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/;
        if ( !fecha ) {
            throw new Error("La fecha ingresada es incorrecta.");
        }
        if ( !regex.test(fecha)) {
            throw new Error("El formato de la fecha incorrecta, usar formato dd-mm-yyyy");
        }

        this.fecha = fecha;
    }

    getHora() {
        return this.hora;
    }

    setHora( hora) {
        //uso la expresion regular para que le de formato fecha dd-mm-yyyy
        const regex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
        if( !hora || !regex.test(hora) ) {
            throw new Error(" La hora ingresada es incorrecta.");
        }
        this.hora = hora;
    }

    getMedico() {
        return this.dni_medico;
    }

    setMedico(medico) {
        if( medico == null ){
            throw new Error("El medico no puede ser nulo");
        }
        this.dni_medico = medico;
    }

    getPaciente() {
        return this.dni_paciente;
    }

    setPaciente( paciente)  {
        if( paciente == null) {
            throw new Error("El paciente no puede ser nulo");
        }
        this.dni_paciente = paciente;
    }
}
