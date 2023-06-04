const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

app.post('/api/submit', (req, res) => {
    const finalString = req.body;

    // Write the submitted data to a text file
    fs.appendFile('/app/data.txt', finalString + '\n', (error) => {
        if (error) {
            console.error('Error writing to file:', error);
            res.sendStatus(500);
        } else {
            console.log('Data written to file');
            res.sendStatus(200);
        }
    });
});

app.get('/api/data', (req, res) => {
    // Read the contents of the text file
    fs.readFile('/app/data.txt', 'utf8', (error, data) => {
        if (error) {
            console.error('Error reading file:', error);
            res.sendStatus(500);
        } else {
            const lines = data.split('\n').filter(Boolean); // Split data into lines and remove empty lines
            res.json(lines);
        }
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});