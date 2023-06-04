const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Set CORS headers for specific route
app.options('/api/submit', cors());

app.post('/api/submit', (req, res) => {
    // Access form data from req.body and process/store it
    // Example: const formData = req.body;
    // Store the data in your desired storage mechanism

    // Send a response or send a success status
    res.sendStatus(200);
});

// Start the server
app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});