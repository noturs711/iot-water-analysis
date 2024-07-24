//shows 1 reading on webpage
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8000; // Change this to your desired port

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost', // Change to your database host
  user: 'root',
  password:'', // Change to your database username
  database: 'water analysis', // Change to your database name
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

// Express Routes
app.get('/', (req, res) => {
  // Fetch the latest reading from the database
  const query = 'SELECT * FROM real_time_data ORDER BY date DESC LIMIT 1';

  db.query(query, (err, result) => {
    if (err) throw err;

    const latestReading = result[0];

    // Read the HTML template file
    // fs.readFile(path.join(__dirname, 'index4.html'), 'utf8', (err, data) => {
    //   if (err) {
    //     res.status(500).send('Error reading HTML file');
    //     return;
    //   }
    fs.readFile(path.join(__dirname, 'index4.html'), 'utf8', (err, data) => {
        if (err) {
          res.status(500).send('Error reading HTML file');
          return;
        }
      // Replace placeholders with the latest reading data
      const htmlContent = data
        .replace('${latestReading.date}', latestReading.date)
        .replace('${latestReading.turbidity}', latestReading.turbidity)
        .replace('${latestReading.tds}', latestReading.tds);

      // Send the rendered HTML to the client
      res.send(htmlContent);
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
