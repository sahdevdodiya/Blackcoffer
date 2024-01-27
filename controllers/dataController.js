// dashboard-backend/controllers/dataController.js
const Data = require('../models/Data');

// Function to create new data
exports.createData = async (req, res) => {
  try {
    // Extract data from the request body
    const newData = req.body;

    // Save data to the MongoDB database
    const createdData = await Data.create(newData);

    res.status(201).json(createdData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to get data
exports.getData = async (req, res) => {
  try {
    // Fetch data from the MongoDB database
    const data = await Data.find();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

