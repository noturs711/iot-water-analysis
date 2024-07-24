// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const mysql = require('mysql');

// // const app = express();
// // const port = 3000;

// // app.use(bodyParser.json());

// // // MySQL connection
// // const connection = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: '',
// //   database: 'internship'
// // });

// // connection.connect(err => {
// //   if (err) {
// //     console.error('Error connecting to MySQL:', err);
// //     return;
// //   }
// //   console.log('Connected to MySQL');
// // });

// // // Create table if not exists
// // const createTableQuery = `
// //   CREATE TABLE IF NOT EXISTS rtd (
// //     id INT AUTO_INCREMENT PRIMARY KEY,
// //     turbidity FLOAT,
// //     tds FLOAT,
// //     date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// //   )
// // `;


// // connection.query(createTableQuery, (err, results) => {
// //   if (err) throw err;
// //   console.log('Table `rtd` exists or created');
// // });

// // // Endpoint to receive data from ESP32
// // app.post('/sensor-data', (req, res) => {
// //   const { id,turbidity,tds,date } = req.body;
// //   const query = 'INSERT INTO rtd (id,turbidity,tds,date) VALUES (?, ?,?,?)';
// //   connection.query(query, [id,turbidity,tds,date], (err, results) => {
// //     if (err) {
// //       console.error('Error inserting data:', err);
// //       res.status(500).send('Server error');
// //       return;
// //     }
// //     res.status(200).send('Data saved successfully');
// //   });
// // });

// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });
// const mysql = require('mysql');
// const SerialPort = require('serialport');
// const Readline = require('@serialport/parser-readline');

// // Create a connection to the database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'internship'
// });

// // Connect to the database
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database');
// });

// // Function to insert sensor data
// function insertSensorData(id,turbidity, tds,date) {
//   const query = 'INSERT INTO rtd (id,turbidity, tds, date) VALUES (?, ?, ?,NOW())';
//   connection.query(query, [id,turbidity, tds,date], (err, results) => {
//     if (err) throw err;
//     console.log('Data inserted successfully');
//   });
// }

// // Open the serial port
// const port = SerialPort('COM8', {
//   baudRate: 115200
// });

// // Create a parser to read lines of data
// const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

// // Read data from the serial port
// parser.on('data', (data) => {
//   try {
//     // Assuming data format is "turbidity_value,tds_value"
//     const [turbidity, tds] = data.split(',').map(Number);
    
//     // Insert the data into the database
//     insertSensorData(turbidity, tds);
//   } catch (error) {
//     console.error('Error parsing data:', error);
//   }
// });

// // Handle serial port errors
// port.on('error', (err) => {
//   console.error('Error with serial port:', err);
// });

// // Ensure the database connection is properly closed when the process exits
// process.on('exit', () => {
//   connection.end();
// });

// // Handle unexpected errors
// process.on('uncaughtException', (err) => {
//   console.error('Uncaught exception:', err);
//   connection.end();
//   process.exit(1);
// });const express = require('express');
// const { SerialPort } = require('serialport');
// const { ReadlineParser } = require('@serialport/parser-readline');

// const app = express();
// const port = 3000; // Port for the web server

// // Replace 'COM8' with your actual port address
// const portAddress = 'COM8';

// // Create a new serial port instance
// const serialPort = new SerialPort({
//   path: portAddress,
//   baudRate: 115200, // Updated baud rate
//   dataBits: 8,
//   parity: 'none',
//   stopBits: 1,
//   flowControl: false
// });

// // Create a new parser instance
// const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// // Open the serial port
// serialPort.on('open', () => {
//   console.log(`Serial port ${portAddress} opened`);
// });

// // Read data from the serial port
// parser.on('data', (data) => {
//   console.log(`Received data: ${data}`);
// });

// // Error handling for the serial port
// serialPort.on('error', (err) => {
//   console.error('Error: ', err.message);
// });

// // Simple web server to serve data
// app.get('/', (req, res) => {
//   res.send('Hello from Node.js server!');
// });

// app.listen(port, () => {
//   console.log(`Web server listening at http://localhost:${port}`);
// // });
// const express = require('express'); // Ensure express is properly imported
// const { SerialPort } = require('serialport');
// const { ReadlineParser } = require('@serialport/parser-readline');

// const app = express();
// const port = 3000; // Port for the web server

// // Replace 'COM8' with your actual port address
// const portAddress = 'COM9';

// // Create a new serial port instance
// const serialPort = new SerialPort({
//   path: portAddress,
//   baudRate: 115200, // Updated baud rate
//   dataBits: 8,
//   parity: 'none',
//   stopBits: 1,
//   flowControl: false
// });

// // Create a new parser instance
// const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// // Open the serial port
// serialPort.on('open', () => {
//   console.log(`Serial port ${portAddress} opened`);
// });

// // Read data from the serial port
// parser.on('data', (data) => {
//   console.log(`Received data: ${data}`);
// });

// // Error handling for the serial port
// serialPort.on('error', (err) => {
//   console.error('Error: ', err.message);
// });

// // Simple web server to serve data
// app.get('/', (req, res) => {
//   res.send('Hello from Node.js server!');
// });

// app.listen(port, () => {
//   console.log(`Web server listening at http://localhost:${port}`);
// // });
// const { ReadlineParser } = require('@serialport/parser-readline');
// const express = require('express');
// const { SerialPort } = require('serialport');
// const mysql = require('mysql2');

// // Express app setup
// const app = express();
// const port = 3000; // Port for the web server

// // Replace 'COM9' with your actual port address
// const portAddress = 'COM9';

// // Create a new serial port instance
// const serialPort = new SerialPort({
//   path: portAddress,
//   baudRate: 115200,
//   dataBits: 8,
//   parity: 'none',
//   stopBits: 1,
//   flowControl: false
// });

// // Create a new parser instance
// const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// // Open the serial port
// serialPort.on('open', () => {
//   console.log(`Serial port ${portAddress} opened`);
// });

// // MySQL database connection setup
// const db = mysql.createConnection({
//   host: 'localhost', // replace with your MySQL host
//   user: 'root', // replace with your MySQL user
//   password: '', // replace with your MySQL password
//   database: 'internship' // replace with your MySQL database name
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error('Database connection error: ', err.message);
//     return;
//   }
//   console.log('Connected to the MySQL database');
// });

// // Read data from the serial port
// parser.on('data', (data) => {
//   console.log(`Received data: ${data}`);
  
//   // Assume data is a comma-separated string: "rtd_value,turbidity_value,tds_value"
//   const [ turbidity, tds] = data.split(',').map(Number);
//   const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Current date and time

//   // Insert data into the database
//   const query = 'INSERT INTO rtd ( turbidity, tds, date) VALUES ( ?, ?, ?)';
//   db.query(query, [ turbidity, tds, date], (err, results) => {
//     if (err) {
//       console.error('Database insertion error: ', err.message);
//       return;
//     }
//     console.log('Data inserted into the database');
//   });
// });

// // Error handling for the serial port
// serialPort.on('error', (err) => {
//   console.error('Error: ', err.message);
// });

// // Simple web server to serve data
// app.get('/', (req, res) => {
//   res.send('Hello from Node.js server!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

//shows data in view history
const { ReadlineParser } = require('@serialport/parser-readline');
const express = require('express');
const { SerialPort } = require('serialport');
const mysql = require('mysql2');
require('dotenv').config();

// Express app setup
const app = express();
const port = 3000; // Port for the web server

// Replace 'COM9' with your actual port address
const portAddress = 'COM9';

// Create a new serial port instance
const serialPort = new SerialPort({
  path: portAddress,
  baudRate: 115200,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false
});

// Create a new parser instance
const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// Open the serial port
serialPort.on('open', () => {
  console.log(`Serial port ${portAddress} opened`);
});

// MySQL database connection setup
const db = mysql.createConnection({
  host: 'localhost', // replace with your MySQL host
  user: 'root', // replace with your MySQL user
  password: '', // replace with your MySQL password
  database: 'water analysis' // replace with your MySQL database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection error: ', err.message);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Read data from the serial port
parser.on('data', (data) => {
  console.log(`Received data: ${data}`);

  // Assume data is a comma-separated string: "turbidity_value,tds_value"
  try {
    const [turbidity, tds] = data.split(',').map(Number);
    const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Current date and time

    // Insert data into the database
    const query = 'INSERT INTO real_time_data (turbidity, tds, date) VALUES (?, ?, ?)';
    db.query(query, [turbidity, tds, date], (err, results) => {
      if (err) {
        console.error('Database insertion error: ', err.message);
        return;
      }
      console.log('Data inserted into the database');
    });
  } catch (err) 
  {
    console.error('Data parsing error: ', err.message);
  }
});

// Error handling for the serial port
serialPort.on('error', (err) => {
  console.error('Error: ', err.message);
});

// Simple web server to serve data
app.get('/', (req, res) =>
   {
  res.send('Hello from Node.js server!');});

// Start the server
app.listen(port, () => 
  {
  console.log(`Server is running on http://localhost:${port}`);
}
);
