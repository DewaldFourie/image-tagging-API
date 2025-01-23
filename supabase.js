const { createClient }  = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabaseUrl = process.env.DB_URL;
const supabaseKey = process.env.DB_KEY;
const supabaseSecret = process.env.DB_SECRET;

const supabase = createClient(supabaseUrl, supabaseKey, supabaseSecret);

module.exports = supabase