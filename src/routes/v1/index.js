const express = require('express');
const CityController = require('../../controllers/city-controller');

const router = express.Router();

//router.post('/city',cityController.create);
router.route('/city').post(CityController.create).get(CityController.getAll);
router.route('/city/:id').delete(CityController.destroy).patch(CityController.update).get(CityController.get);



module.exports = router;

