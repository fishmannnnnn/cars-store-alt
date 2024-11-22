const express = require('express');
const cors = require('cors');
const data = require('./data.js');

const app = express();
const PORT = 5000;

app.use(cors({ origin: true }));
app.get('/api/cars', (req, res) => {
    setTimeout(() => {
    res.json(data);
  }, 250);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
