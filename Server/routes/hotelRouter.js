const express = require('express');
const router = express.Router();
const HotalController = require('../Controllers/HotalController');

router.post('/Createhotel', HotalController.createHotel);

module.exports = router;
