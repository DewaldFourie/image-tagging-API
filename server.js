const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

//Middleware to parse JSON
app.use(express.json());

// Base route
app.get('/', (req, res) => {
    res.send('API is Running...');
});

// Start the server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});