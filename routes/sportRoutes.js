const express = require('express');
const sportController = require('../controllers/sportController');

const router = express.Router();

router.route('/').get(sportController.getAllSports).post(sportController.createSport);

router.route('/:id').get(sportController.getSport).patch(sportController.updateSport).delete(sportController.deleteSport);

module.exports = router;