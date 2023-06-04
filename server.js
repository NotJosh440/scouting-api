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
    const finalString = req.body;

    // Send a response or send a success status
    console.log(req.body); // Check the received data
    fs.appendFile('data.txt', finalString + '\n', (err) => {
        if (err) {
            console.error('An error occurred while storing the data:', err);
            return res.status(500).json({ message: 'Error storing the data' });
        }

        console.log('Data stored successfully');
        return res.sendStatus(200);
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});