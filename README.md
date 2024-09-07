# TPArqWeb
Trabajo practico para la materia Arquitectura Web de la carrera de Lic en Ciberseguridad en la UP. Para la idea de negocio me base en el TP que usamos para Programación 3\ Labo 1.
Descripción del Negocio: El sistema de turnos médicos está diseñado para gestionar las citas de una clínica que tiene varios consultorios, permitiendo a los médicos y pacientes gestionar sus citas de manera eficiente. 
•	Médicos: Podrán consultar sus turnos y generar informes financieros sobre las consultas realizadas en un período específico.
•	Pacientes: Podrán agendar citas con los médicos disponibles según los horarios asignados, evitando solapamientos.
•	Administradores: Tendrán acceso para gestionar tanto los médicos como los pacientes, además de generar reportes globales.
El sistema incluirá funcionalidades CRUD para registrar y gestionar tanto médicos como pacientes.
Modelo de Clases
1.	Usuario (Clase base):
o	Atributos: nombre, apellido, dni, idusuario.
o	Métodos comunes: Getters y Setters para los atributos.
2.	Médico (Subclase de Usuario):
o	Atributos: especialidad, costoConsulta, turnos
o	Métodos: getCostoConsulta(), getEspecialidad()
3.	Paciente (Subclase de Usuario):
o	Atributos: turnos
o	Métodos: agendarTurno(), cancelarTurno()
4.	Turno (Clase):
o	Atributos: fecha, hora, medico, paciente
o	Métodos: setMedico(), setPaciente()

Documentación de la API:
Endpoints 
•  Médicos
•	GET /api/medicos
o	Descripción: Obtiene una lista de todos los médicos registrados.
o	HTTP Status: 200 OK
•	POST /api/medicos
o	Descripción: Registra un nuevo médico en el sistema.
o	HTTP Status: 201 Created
•	PUT /api/medicos/{id}
o	Descripción: Actualiza los detalles de un médico existente.
o	HTTP Status: 200 OK
•	DELETE /api/medicos/{id}
o	Descripción: Elimina un médico del sistema.
o	HTTP Status: 204 No Content
•  Pacientes
•	GET /api/pacientes
o	Descripción: Obtiene una lista de todos los pacientes registrados.
o	HTTP Status: 200 OK
•	POST /api/pacientes
o	Descripción: Registra un nuevo paciente en el sistema.
o	HTTP Status: 201 Created
•	PUT /api/pacientes/{id}
o	Descripción: Actualiza la información de un paciente existente.
o	HTTP Status: 200 OK
•	DELETE /api/pacientes/{id}
o	Descripción: Elimina un paciente del sistema.
o	HTTP Status: 204 No Content
•  Turnos
•	GET /api/turnos
o	Descripción: Obtiene una lista de todos los turnos agendados.
o	HTTP Status: 200 OK
•	POST /api/turnos
o	Descripción: Programa un nuevo turno para un paciente con un médico disponible.
o	HTTP Status: 201 Created
•	PUT /api/turnos/{id}
o	Descripción: Modifica un turno existente.
o	HTTP Status: 200 OK
•	DELETE /api/turnos/{id}
o	Descripción: Elimina un turno agendado.
o	HTTP Status: 204 No Content

