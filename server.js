const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.text());

app.post('/api/submit', (req, res) => {
    // Access form data from req.body and process/store it
    // Example: const formData = req.body;
    // Store the data in your desired storage mechanism

    console.log("fvgrhty");
    const finalString = req.body;

    // Send a response or send a success status
    console.log(req.body); // Check the received data

    res.send(finalString);
});