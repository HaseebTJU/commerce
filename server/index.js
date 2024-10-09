const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser'); 
const app = express(); 


// Middleware
app.use(cors());  // Enabling CORS for cross-origin requests
app.use(bodyParser.json());  // Parsing incoming JSON requests

//Route files 
const registrationRoute = require('./routes/registration'); 
const loginRoute = require('./routes/login'); 

//mounting the routes 
app.use('/registration', registrationRoute); 
app.use('/login', loginRoute); 

// Starting the Server 
const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


