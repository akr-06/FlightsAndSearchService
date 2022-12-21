const express = require('express');
const { FlightMiddlewares }= require('../../middlewares/index');

const req = require('express/lib/request');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');


const router = express.Router();

router.route('/city').post(CityController.create).get(CityController.getAll);
router.route('/city/:id').delete(CityController.destroy).patch(CityController.update).get(CityController.get);

router.route('/flights').post(FlightMiddlewares.validateCreateFlight,FlightController.create).get(FlightController.getAll);

router.route('/airports').post(AirportController.create);


module.exports = router;

