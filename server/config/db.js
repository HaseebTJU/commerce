const { Pool } = require('pg'); 
const dotenv = require('dotenv'); 
dotenv.config(); 

const pool = new Pool({
    user: process.env.DB_USER,          // Database user
    host: process.env.DB_HOST,          // Database host (usually 'localhost')
    database: process.env.DB_NAME,      // Database name
    password: process.env.DB_PASSWORD,  // Database password
    port: process.env.DB_PORT,          // Database port (usually 5432 for PostgreSQL)
});

// Test the database connection
pool.connect()
    .then(() => console.log('Connected to the database successfully'))
    .catch(err => console.error('Database connection error', err.stack));

module.exports = pool;