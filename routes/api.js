// dashboard-backend/routes/api.js
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// GET request to fetch data
router.get('/data', dataController.getData);

// POST request to create new data
router.post('/data', dataController.createData);

module.exports = router;


