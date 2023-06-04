const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.text());

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
    // Read the contents of the data.txt file
    const data = fs.readFileSync('/app/data.txt', 'utf-8');

    // Remove quotation marks and replace '\n' with line breaks
    const formattedData = data.replace(/"/g, '').replace(/\n/g, '<br>');

    // Return the formatted data as the response
    res.send(formattedData);
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});