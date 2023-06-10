const express = require('express');
const cors = require('cors');
const fs = require('fs');
const XlsxPopulate = require('xlsx-populate');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.text());

app.post('/api/submit', (req, res) => {
    let finalString = req.body;

    // Trim any leading or trailing whitespace
    finalString = finalString.trim();

    // Write the submitted data to a text file
    fs.appendFile('/data.txt', finalString + '\n', (error) => {
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

    // Create a new workbook
    const workbook = XlsxPopulate.fromBlank();

    // Get the first sheet
    const sheet = workbook.sheet(0);

    // Populate the sheet with data
    rows.forEach((row, rowIndex) => {
        // Split each row into columns based on the "|" separator
        const columns = row.split('|');

        columns.forEach((column, columnIndex) => {
            // Set the value in each cell
            sheet.cell(rowIndex + 1, columnIndex + 1).value(column);
        });
    });

    // Convert the workbook to a buffer
    workbook.outputAsync().then((buffer) => {
        // Set the response headers for Excel file download
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=data.xlsx');

        // Send the buffer as the response
        res.send(buffer);
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server started');
});