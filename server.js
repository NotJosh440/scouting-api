const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.text());

app.post('/api/submit', (req, res) => {
    // Access form data from req.body and process/store it
    // Example: const formData = req.body;
    // Store the data in your desired storage mechanism
    const finalString = req.body;

    // Send a response or send a success status
    console.log(req.body); // Check the received data
    fs.writeFile('1data.txt', finalString, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.sendStatus(500);
        } else {
            console.log('Data stored in submitted_data.txt');
            res.sendStatus(200);
        }
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});