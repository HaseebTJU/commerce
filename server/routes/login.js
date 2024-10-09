const express = require('express'); 
const router = express.Router();
const pool = require('../config/db'); 
const bcrypt = require('bcrypt'); 

// logging in
router.post("/", async (req, res) => {
    const { username, password } = req.body; 

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Query for the user
        const response = await pool.query('SELECT * FROM users WHERE username = $1', [username]); 
        if (response.rows.length === 0) {
            return res.status(400).json({ message: 'Incorrect username or password' });
        } 

        // Get the hashed password from the database
        const hashedPassword = response.rows[0].password; 
        const matchedPassword = await bcrypt.compare(password, hashedPassword);
        
        if (!matchedPassword) {
            return res.status(400).json({ message: 'Incorrect username or password' }); 
        } 
        
        res.status(200).json({ message: 'Login Successful!' });
        
    } catch(e) {
        console.error(e);
        res.status(500).json({ message: "Server error" });
    }
}); 

module.exports = router;