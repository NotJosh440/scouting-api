const express = require('express');
const app = express();

app.post('/api/submit', (req, res) => {
    // Access form data from req.body and process/store it
    // Example: const formData = req.body;
    // Store the data in your desired storage mechanism

    // Return a response or send a success status
    res.send("dfbg");
    res.sendStatus(200);
});

// Start the server
app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});