const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

// Get leaderboard for a specific game
router.get('/:gameId', leaderboardController.getLeaderboard);

// Add a new score entry to the leaderboard
router.post('/', leaderboardController.addScore);

// Delete a score entry by ID
router.delete('/:id', leaderboardController.deleteScore);

module.exports = router;