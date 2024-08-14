const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// MySQL connection configuration
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Suwasthi@2005',
    database: 'gift'
});

app.use(cors());

app.get('/api/products', (req, res) => {
    pool.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
