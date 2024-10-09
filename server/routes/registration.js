const express = require("express"); 
const router = express.Router(); 
const pool = require('../config/db');
const bcrypt = require('bcrypt'); 
//registration

router.post("/", async (req, res) => {
    const { body } = req;
    const { username, password } = body; 

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    };
    
    try {
        const response = await pool.query('SELECT * FROM users WHERE username = $1', [username]); 
        if (response.rows.length !== 0) {
           return res.status(400).json('User already exists!');
        } 

        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt);

        await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]); 
        res.status(201).json({ message: 'User registered successfully' }); 
    } catch (e) {
        console.error(e); 
        res.status(500).json({ message: 'Server error'} );
    }

});

module.exports = router;