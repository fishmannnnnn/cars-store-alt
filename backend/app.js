const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors({ origin: true }));
app.get('/api/cars', (req, res) => {
    const filePath = path.join(__dirname, 'cars.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the JSON file:', err);
            res.status(500).send('Error reading the data');
            return;
        }
        const cars = JSON.parse(data);
        
        res.json(cars);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
