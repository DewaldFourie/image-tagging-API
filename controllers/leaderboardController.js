const pool = require('../models/leaderboardModel');

// Get the leaderboard data 
exports.getLeaderboard = async (req, res) => {
    const { gameId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM leaderboards WHERE game_id = $1 ORDER BY score ASC', [gameId]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch leaderboard data' });
    }
};

// Add a new leaderboard entry
exports.addScore = async (req, res) => {
    try {
        const { game_id, player_name, score } = req.body;
        await pool.query(`
            CREATE TABLE IF NOT EXISTS leaderboards (
                id SERIAL PRIMARY KEY,
                game_id VARCHAR(255) NOT NULL,
                player_name VARCHAR(255) NOT NULL,
                score VARCHAR(255) NOT NULL
            );
        `);
        const result = await pool.query(
        `
        
        INSERT INTO leaderboards (game_id, player_name, score) VALUES ($1, $2, $3) RETURNING *;
        `,
            [game_id, player_name, score]
        );
        res.status(201).json({
            message: "Score added successfully",
            data: result.rows[0],
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
        await pool.query('DELETE FROM leaderboards WHERE id = $1', [id]);
        res.json({ message: 'Score deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete score' });
    }
};

