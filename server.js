const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json()); // Add this line to parse JSON data

// ...

app.post('/api/submit', (req, res) => {
    // Access form data from req.body and process/store it
    // Example: const formData = req.body;
    // Store the data in your desired storage mechanism

    const finalString = req.body;
    const formData = finalString.split('|');

    // Send a response or send a success status
    console.log("fvgrhty");

    res.json(formData);
});

app.get('/api/data', (req, res) => {
    // Retrieve the data from your storage mechanism
    // Example: const formData = fetchDataFromDatabase();

    // Send the data as the response
    res.json(formData);
});

// Start the server
app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});