const express = require('express');
const req = require('express/lib/request');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

//router.post('/city',cityController.create);
router.route('/city').post(CityController.create).get(CityController.getAll);
router.route('/city/:id').delete(CityController.destroy).patch(CityController.update).get(CityController.get);

router.route('/flights').post(FlightController.create)

module.exports = router;

