const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Serve the text file as a static asset
app.use('/data', express.static('data.txt'));

app.post('/api/submit', (req, res) => {
    const finalString = req.body;

    // Store the data in a text file
    fs.appendFile('data.txt', finalString + '\n', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.sendStatus(500);
        } else {
            console.log('Data written to file successfully');
            res.sendStatus(200);
        }
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});