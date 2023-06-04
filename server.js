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
    const fs = require('fs');
    const data = fs.readFileSync('/app/data.txt', 'utf-8');

    // let jsonData;
    // try {
    //     // Parse the JSON data
    //     jsonData = JSON.parse(data);
    // } catch (error) {
    //     console.error('Error parsing data:', error);
    //     return res.status(500).json({ error: 'Failed to parse data' });
    // }

    // Return the parsed JSON data as the response
    res.json(data);
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});