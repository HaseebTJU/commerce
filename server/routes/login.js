const express = require('express'); 
const router = express.Router();
const pool = require('../config/db'); 

// logging in
router.post("/", async (req, res) => {
    const { username, password } = req.body; 

    try {
        const response = await pool.query('SELECT * FROM WHERE username = $1', [username]); 
        if (response.rows.length === 0) {
            return res.status(400).json({ message: 'Incorrect username or password' });
        }; 

        res.status(200).json({ message: 'Login Successful!' })
    } catch(e) {
        console.error(e);
        res.status(500).json({ message: "Server error"} );
    }

}); 

module.exports = router;