import express from 'express';
import Debug from 'debug';
import jwt from 'express-jwt';

const app = express.Router();
const debug = new Debug('almundo-api:hotel');

// Ruta para obtener todos los hoteles
app.get('/hotels');
// Ruta para buscar hoteles por nombre
app.get('/hotels/name/:name');
// Ruta para buscar hoteles por estrellas
app.get('/hotels/stars/:stars');
// Ruta para obtener un hotel
app.get('/hotel/:id');
// Ruta para crear un hotel
app.post('/hotel');
// Ruta para modificar un hotel
app.put('/hotel/:id');
// Ruta para eliminar un hotel
app.delete('/hotel/:id');

export default app;
