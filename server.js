const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

app.post('/api/submit', (req, res) => {
    // Access form data from req.body and process/store it
    // Example: const formData = req.body;
    // Store the data in your desired storage mechanism

    const finalString = req.body;

    // Send a response or send a success status
    console.log("fvgrhty");
    console.log(req.body); // Check the received data

    res.send(finalString);
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