const pool = require('../models/leaderboardModel');
const { getLeaderboard } = require('../models/leaderboardModel');
const supabase = require('../supabase');

// Get the leaderboard data 
exports.getLeaderboard = async (req, res) => {
    const { gameId } = req.params;
    try {
        const data = await getLeaderboard(gameId);
        res.json(data);
    } catch (err) {
        console.error('Error fetching leaderboard data:', err.message);
        res.status(500).json({ error: 'Failed to fetch leaderboard data' });
    }
};


// Add a new leaderboard entry
exports.addScore = async (req, res) => {
    try {
        const { game_id, player_name, score } = req.body;
        const { data, error } = await supabase
            .from('leaderboards')
            .insert({ game_id, player_name, score })
        if (error) {
            throw error
        }
        res.status(201).json({
            message: "Score added successfully"
        });
    } catch (err) {
        console.error("Error adding score:", err.message);
        res
            .status(500)
            .json({ error: "Failed to add score", message: err.message });
    }
};


// Delete a score entry from the leaderboard
exports.deleteScore = async (req, res) => {
    const { id } = req.params;
    try {
        const { data, error } = await supabase
            .from('leaderboards')
            .delete()
            .eq('id', id)
        if (error) {
            throw error
        }
        res.status(201).json({ 
            message: 'Score deleted successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete score' });
    }
};

