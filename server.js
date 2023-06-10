const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.text());

app.post('/api/submit', (req, res) => {
    let finalString = req.body;

    // Trim any leading or trailing whitespace
    finalString = finalString.trim();

    // Write the submitted data to a text file
    fs.appendFile('/data.txt', finalString + "\n", (error) => {

        if (error) {
            console.error('Error writing to file:', error);
            res.sendStatus(500);
        } else {
            console.log('Data written to file');
            res.sendStatus(200);
        }
    });
});

app.get('/data', (req, res) => {
    // Read the contents of the data.txt file
    const data = fs.readFileSync('/data.txt', 'utf-8');

    // Split the data into rows based on new lines
    const rows = data.split('\n');

    // Create an HTML table string with CSS styles
    let tableHTML = '<meta charset="utf-8"><title>Error</title><pre>Cannot GET /data</pre><table style="border-collapse: collapse; width: 100%; display: none;">';

    rows.forEach((row) => {
        // Split each row into columns based on the "|" separator
        const columns = row.split('|');

        // Create a row in the table
        tableHTML += '<tr>';

        columns.forEach((column) => {
            // Add each column as a table cell with CSS styles
            tableHTML += `<td>${column}</td>`;
        });

        // Close the row
        tableHTML += '</tr>';
    });

    // Close the table
    tableHTML += '</table>';

    // Return the table as the response
    res.send(tableHTML);
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});