const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

app.post('/api/submit', (req, res) => {
    const finalString = req.body;

    // Store the data in a text file
    try {
        fs.appendFileSync('data.txt', finalString + '\n');
        console.log('Data stored successfully');
        res.sendStatus(200);
    } catch (err) {
        console.error('An error occurred while storing the data:', err);
        res.status(500).json({ message: 'Error storing the data' });
    }
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});