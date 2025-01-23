const supabase = require('./supabase');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const leaderboardRoutes = require('./routes/leaderboardRoute');


dotenv.config();

const app = express();

//Middleware to parse JSON
app.use(cors());
app.use(bodyParser.json());

app.use('/api/leaderboards', leaderboardRoutes);

// Start the server
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});