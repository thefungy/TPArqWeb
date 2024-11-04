
export default class Usuario {

    // Constructor
    constructor (dni,nombre,apellido) {
        this.dni;
        this.nombre;
        this.apellido;
        
        this.setDni(dni);
        this.setNombre(nombre);
        this.setApellido(apellido);
    }

    getDni() {
        return dni;
    }

    setDni(dni) {
        if( dni <= 0 && dni instanceof Number ) {
            throw new Error("Dni ingresado es invalido");
        }
        this.dni = dni;
    }

    getNombre() {
        return nombre;
    }

    setNombre(nombre) {
        if ( !nombre ) {
            throw new Error("Nombre ingresado es invalido");
        }
        this.nombre = nombre;
    }

    getApellido() {
        return apellido;
    }

    setApellido( apellido) {
        if ( !apellido ) {
            throw new Error("Nombre ingresado es invalido");
        }
        this.apellido = apellido;
    }
}
