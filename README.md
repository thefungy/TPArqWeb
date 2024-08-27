# TPArqWeb
Trabajo practico para la materia Arquitectura Web de la carrera de Lic en Ciberseguridad en la UP. Para la idea de negociome base en el TP que usamos para Programacion 3\ Labo 1.

**Descripción del Negocio**: El sistema de turnos médicos está diseñado para administrar las citas de una clínica que tiene varios consultorios, permitiendo a los médicos y pacientes gestionar sus citas de manera eficiente. Los médicos podrán consultar sus turnos, mientras que los pacientes podrán agendar citas de acuerdo con la disponibilidad de los profesionales de la salud. El sistema también permite generar reportes financieros para los médicos.
Ejemplos de lo que podria hacer: 
 - Registrar Médicos y Pacientes en el sistema a través de los servicios CRUD 
 - Los pacientes pueden agendar un turno con un médico disponible. El sistema validará que no haya solapamientos de horarios.
 - Un administrador o el mismo médico puede generar un reporte financiero que muestre el total cobrado por sus consultas en un período específico.

Servicios Expuestos:
Empleados
- **GET /empleados**: Obtiene la lista de todos los empleados.
- **POST /empleados**: Crea un nuevo empleado.
- **GET /empleados/{id}**: Obtiene los detalles de un empleado específico.
- **PUT /empleados/{id}**: Actualiza los datos de un empleado.
- **DELETE /empleados/{id}**: Elimina un empleado.

Departamentos
- **GET /departamentos**: Obtiene la lista de todos los departamentos.
- **POST /departamentos**: Crea un nuevo departamento.
- **GET /departamentos/{id}**: Obtiene los detalles de un departamento específico.
- **PUT /departamentos/{id}**: Actualiza los datos de un departamento.
- **DELETE /departamentos/{id}**: Elimina un departamento.

Proyectos
- **GET /proyectos**: Obtiene la lista de todos los proyectos.
- **POST /proyectos**: Crea un nuevo proyecto.
- **GET /proyectos/{id}**: Obtiene los detalles de un proyecto específico.
- **PUT /proyectos/{id}**: Actualiza los datos de un proyecto.
- **DELETE /proyectos/{id}**: Elimina un proyecto.

Operaciones Especiales
- **GET /departamentos/{id}/empleados**: Lista todos los empleados de un departamento.
- **GET /departamentos/{id}/salario-total**: Calcula el salario total de un departamento.
- **POST /proyectos/{id}/asignar-empleado/{empleado_id}**: Asigna un empleado a un proyecto.
- **GET /proyectos/{id}/empleados**: Lista todos los empleados asignados a un proyecto.
