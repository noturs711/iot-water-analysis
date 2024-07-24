
const express = require('express');
const mysql = require('mysql2'); // Assuming MySQL database
const path = require('path');

const app = express();
const port = 4000;

// Database connection details (replace with your credentials)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'water analysis'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Serve the HTML file at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle data request
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM real_time_data'; // Replace with your actual query
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching data'); // Handle errors appropriately
    } else {
      res.json(results); // Send data as JSON response
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
