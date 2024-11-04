
//Creo una variable y le tiro la libreria
import express from 'express';

import { obtenerConexionBaseDeDatos, inicializarBaseDeDatos} from './src/model/baseDeDatos.js'
import { getRouterMedico } from './src/router/medicoRouter.js';
import { getRouterPaciente } from './src/router/pacienteRouter.js';
import { getRouterTurnos } from './src/router/turnoRouter.js';

// inicializo
const app = express()
const port = 3000 // lo asigno 30000 por convencion

// puede usar json
app.use(express.json());

// Agrego prefijo Api y creo las rutas
app.use('/api/', getRouterMedico() );
app.use('/api/', getRouterPaciente() );
app.use('/api/', getRouterTurnos() );

// ruta de inicio
app.get('/', (req, res) => { res.send('Hello World!') })

// INICIALIZA LA BASE DE DATOS - USO UNA VEZ.
//inicializarBaseDeDatos().then();

// Levanta el servidor
app.listen(port, () => {
  obtenerConexionBaseDeDatos();
  console.log(`Servidor iniciado en http://localhost:${port}`)
})