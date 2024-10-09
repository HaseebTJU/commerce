const express = require("express"); 
const router = express.Router(); 
const pool = require('../config/db');

//registration

router.post("/", async (req, res) => {
    const { body } = req;
    const { username, password } = body; 
    
    try {
        await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]); 
        res.status(201).json({ message: 'User registered successfully' }); 
    } catch (e) {
        console.error(e); 
        res.status(500).json({ message: 'Server error'} );
    }

});

module.exports = router;