const supabase = require('../supabase');

const getLeaderboard = async (gameId) => {
    try {
        const { data, error } = await supabase
            .from("leaderboards")
            .select("*")
            .eq("game_id", gameId);
        return data;
    } catch (err) {
        console.error("Error fetching leaderboard data:", err.message);
        throw err;
    }
};

module.exports = { getLeaderboard };