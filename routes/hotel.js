import express from 'express';
import Debug from 'debug';
import Db from '../database';
import { db } from '../config';
import { handleError } from '../utils';

const app = express.Router();
const database = new Db(db);
const debug = new Debug('almundo-api:hotel');

// Ruta para obtener todos los hoteles
app.get('/hotels', async (req, res) => {
  debug('Get hotels');
  try {
    await database.connect();
    const hotels = await database.getHotels();
    await database.disconnect();
    res.status(200).json(hotels);
  } catch (error) {
    handleError(error, res);
  }
});
// Ruta para buscar hoteles por nombre
app.get('/hotels/name/:name', async (req, res) => {
  debug(`Get hotels by name ${req.params.name}`);
  const { name } = req.params;
  try {
    await database.connect();
    const hotels = await database.getHotelsByName(name);
    await database.disconnect();
    res.status(200).json(hotels);
  } catch (error) {
    handleError(error, res);
  }
});
// Ruta para buscar hoteles por estrellas
app.get('/hotels/stars/:stars', async (req, res) => {
  debug(`Get hotel by stars ${req.params.stars}`);
  const { stars } = req.params;
  try {
    await database.connect();
    const hotels = await database.getHotelsByStars(parseInt(stars, 10));
    await database.disconnect();
    res.status(200).json(hotels);
  } catch (error) {
    handleError(error, res);
  }
});
// Ruta para obtener un hotel
app.get('/hotel/:id', async (req, res) => {
  debug(`Get hotel by id ${req.params.id}`);
  const { id } = req.params;
  try {
    await database.connect();
    const hotels = await database.getHotel(id);
    await database.disconnect();
    res.status(200).json(hotels);
  } catch (error) {
    handleError(error, res);
  }
});
// Ruta para crear un hotel
app.post('/hotel', async (req, res) => {
  debug('Creating new hotel');
  const { hotel } = req.body;
  try {
    await database.connect();
    const hotelCreated = await database.createHotel(hotel);
    await database.disconnect();
    res.status(201).json(hotelCreated);
  } catch (error) {
    handleError(error, res);
  }
});
// Ruta para modificar un hotel
app.put('/hotel/:id', async (req, res) => {
  debug(`Updating hotel by id ${req.params.id}`);
  const { id } = req.params;
  const { hotel } = req.body;
  try {
    await database.connect();
    const hotelUpdated = await database.updateHotel(id, hotel);
    await database.disconnect();
    res.status(201).json(hotelUpdated);
  } catch (error) {
    handleError(error, res);
  }
});
// Ruta para eliminar un hotel
app.delete('/hotel/:id', async (req, res) => {
  debug(`Deleting hotel by id ${req.params.id}`);
  const { id } = req.params;
  try {
    await database.connect();
    const hotelDeleted = await database.deleteHotel(id);
    await database.disconnect();
    res.status(201).json(hotelDeleted);
  } catch (error) {
    handleError(error, res);
  }
});

export default app;
