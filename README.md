# TP Arquitectura Web

Trabajo práctico para la materia Arquitectura Web de la carrera de Lic en Ciberseguridad en la UP. Para la idea de negocio me base en el TP que usamos para Programación 3\ Labo 1.

## Descripción del Negocio

El sistema de turnos médicos está diseñado para gestionar las citas de una clínica que tiene varios consultorios, permitiendo a los médicos y pacientes gestionar sus citas de manera eficiente.

- **Médicos:** Podrán consultar sus turnos y generar informes financieros sobre las consultas realizadas en un período específico.
- **Pacientes:** Podrán agendar citas con los médicos disponibles según los horarios asignados, evitando solapamientos.
- **Administradores:** Tendrán acceso para gestionar tanto los médicos como los pacientes, además de generar reportes globales.

El sistema incluirá funcionalidades CRUD para registrar y gestionar tanto médicos como pacientes.

## Modelo de Clases

1. **Usuario (Clase base):**
   - Atributos: `nombre`, `apellido`, `dni`, `idusuario`.
   - Métodos comunes: Getters y Setters para los atributos.

2. **Médico (Subclase de Usuario):**
   - Atributos: `especialidad`, `costoConsulta`, `turnos`.
   - Métodos: `getCostoConsulta()`, `getEspecialidad()`.

3. **Paciente (Subclase de Usuario):**
   - Atributos: `turnos`.
   - Métodos: `agendarTurno()`, `cancelarTurno()`.

4. **Turno (Clase):**
   - Atributos: `fecha`, `hora`, `medico`, `paciente`.
   - Métodos: `setMedico()`, `setPaciente()`.

## Documentación de la API

### Endpoints

#### Médicos

- **GET /api/medicos**
  - Descripción: Obtiene una lista de todos los médicos registrados.
  - HTTP Status: `200 OK`

- **POST /api/medicos**
  - Descripción: Registra un nuevo médico en el sistema.
  - HTTP Status: `201 Created`

- **PUT /api/medicos/{id}**
  - Descripción: Actualiza los detalles de un médico existente.
  - HTTP Status: `200 OK`

- **DELETE /api/medicos/{id}**
  - Descripción: Elimina un médico del sistema.
  - HTTP Status: `204 No Content`

#### Pacientes

- **GET /api/pacientes**
  - Descripción: Obtiene una lista de todos los pacientes registrados.
  - HTTP Status: `200 OK`

- **POST /api/pacientes**
  - Descripción: Registra un nuevo paciente en el sistema.
  - HTTP Status: `201 Created`

- **PUT /api/pacientes/{id}**
  - Descripción: Actualiza la información de un paciente existente.
  - HTTP Status: `200 OK`

- **DELETE /api/pacientes/{id}**
  - Descripción: Elimina un paciente del sistema.
  - HTTP Status: `204 No Content`

#### Turnos

- **GET /api/turnos**
  - Descripción: Obtiene una lista de todos los turnos agendados.
  - HTTP Status: `200 OK`

- **POST /api/turnos**
  - Descripción: Programa un nuevo turno para un paciente con un médico disponible.
  - HTTP Status: `201 Created`

- **PUT /api/turnos/{id}**
  - Descripción: Modifica un turno existente.
  - HTTP Status: `200 OK`

- **DELETE /api/turnos/{id}**
  - Descripción: Elimina un turno agendado.
  - HTTP Status: `204 No Content`


