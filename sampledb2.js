// const { ReadlineParser } = require('@serialport/parser-readline');
// const express = require('express');
// const { SerialPort } = require('serialport');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const path = require('path');

// require('dotenv').config();

// // Express app setup
// const app = express();
// const port = 7000; // Port for the web server

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());

// // Serve the static HTML file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index2.html'));
// });

// // MySQL database connection setup
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '', // Add your MySQL root password here
//     database: 'water analysis',
// });

// // Connect to the database
// db.connect((err) => {
//     if (err) {
//         console.error('Database connection error: ', err.message);
//         return;
//     }
//     console.log('Connected to the MySQL database');
// });

// // Replace 'COM9' with your actual port address
// const portAddress = 'COM9';

// // Create a new serial port instance
// const serialPort = new SerialPort(portAddress, {
//     baudRate: 115200,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false
// });

// // Create a new parser instance
// const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// // Open the serial port
// serialPort.on('open', () => {
//     console.log(`Serial port ${portAddress} opened`);
// });

// // Read data from the serial port
// parser.on('data', (data) => {
//     console.log(`Received data: ${data}`);

//     // Assume data is a comma-separated string: "turbidity_value,tds_value"
//     try {
//         const [turbidity, tds] = data.split(',').map(Number);
//         const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Current date and time

//         // Insert data into the database
//         const query = 'INSERT INTO real_time_data (turbidity, tds, date) VALUES (?, ?, ?)';
//         db.query(query, [turbidity, tds, date], (err, results) => {
//             if (err) {
//                 console.error('Database insertion error: ', err.message);
//                 return;
//             }
//             console.log('Data inserted into the database');
//         });
//     } catch (err) {
//         console.error('Data parsing error: ', err.message);
//     }
// });

// // Error handling for the serial port
// serialPort.on('error', (err) => {
//     console.error('Serial port error: ', err.message);
// });

// // Endpoint to create a table
// app.post('/create-table', (req, res) => {
//     const tableName = req.body.tableName;
//     const createTableQuery = `CREATE TABLE ${tableName} (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         tds VARCHAR(255),
//         turbidity VARCHAR(255),
//         date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )`;

//     db.query(createTableQuery, (err, result) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//         } else {
//             console.log('Table created:', tableName);
//             res.json({ tableName: tableName });
//         }
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// // });
// const { ReadlineParser } = require('@serialport/parser-readline');
// const express = require('express');
// const { SerialPort } = require('serialport');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const path = require('path');
// require('dotenv').config();

// // Express app setup
// const app = express();
// const port = 7000; // Port for the web server

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());

// // Serve the static HTML file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index2.html'));
// });

// // MySQL database connection setup
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '', // Add your MySQL root password here
//     database: 'water analysis',
// });

// // Connect to the database
// db.connect((err) => {
//     if (err) {
//         console.error('Database connection error: ', err.message);
//         return;
//     }
//     console.log('Connected to the MySQL database');
// });

// // Replace 'COM9' with your actual port address
// const portAddress = 'COM9';

// // Create a new serial port instance
// const serialPort = new SerialPort({
//     path: portAddress,
//     baudRate: 115200,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false
// });

// // Create a new parser instance
// const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// // Open the serial port
// serialPort.on('open', () => {
//     console.log(`Serial port ${portAddress} opened`);
// });

// // Read data from the serial port
// parser.on('data', (data) => {
//     console.log(`Received data: ${data}`);

//     // Assume data is a comma-separated string: "turbidity_value,tds_value"
//     try {
//         const [turbidity, tds] = data.split(',').map(Number);
//         const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Current date and time

//         // Insert data into the database
//         const query = 'INSERT INTO real_time_data (turbidity, tds, date) VALUES (?, ?, ?)';
//         db.query(query, [turbidity, tds, date], (err, results) => {
//             if (err) {
//                 console.error('Database insertion error: ', err.message);
//                 return;
//             }
//             console.log('Data inserted into the database');
//         });
//     } catch (err) {
//         console.error('Data parsing error: ', err.message);
//     }
// });

// // Error handling for the serial port
// serialPort.on('error', (err) => {
//     console.error('Serial port error: ', err.message);
// });

// // Endpoint to create a table
// app.post('/create-table', (req, res) => {
//     const tableName = req.body.tableName;
//     const createTableQuery = `CREATE TABLE ${tableName} (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         tds VARCHAR(255),
//         turbidity VARCHAR(255),
//         date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )`;

//     db.query(createTableQuery, (err, result) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//         } else {
//             console.log('Table created:', tableName);
//             res.json({ tableName: tableName });
//         }
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// // });
// const { ReadlineParser } = require('@serialport/parser-readline');
// const express = require('express');
// const { SerialPort } = require('serialport');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const path = require('path');
// require('dotenv').config();

// // Express app setup
// const app = express();
// const port = 7000; // Port for the web server

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());

// // Serve the static HTML file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index2.html'));
// });

// // MySQL database connection setup
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '', // Add your MySQL root password here
//     database: 'water analysis',
// });

// // Connect to the database
// db.connect((err) => {
//     if (err) {
//         console.error('Database connection error: ', err.message);
//         return;
//     }
//     console.log('Connected to the MySQL database');
// });

// // Replace 'COM9' with your actual port address
// const portAddress = 'COM9';

// // Create a new serial port instance
// const serialPort = new SerialPort({
//     path: portAddress,
//     baudRate: 115200,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false
// });

// // Create a new parser instance
// const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// // Open the serial port
// serialPort.on('open', () => {
//     console.log(`Serial port ${portAddress} opened`);
// });

// let currentTableName = '';

// // Read data from the serial port
// parser.on('data', (data) => {
//     console.log(`Received data: ${data}`);

//     if (currentTableName) {
//         // Assume data is a comma-separated string: "turbidity_value,tds_value"
//         try {
//             const [turbidity, tds] = data.split(',').map(Number);
//             const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Current date and time

//             // Insert data into the database
//             const query = `INSERT INTO ${currentTableName} (turbidity, tds, date) VALUES (?, ?, ?)`;
//             db.query(query, [turbidity, tds, date], (err, results) => {
//                 if (err) {
//                     console.error('Database insertion error: ', err.message);
//                     return;
//                 }
//                 console.log('Data inserted into the database');
//             });
//         } catch (err) {
//             console.error('Data parsing error: ', err.message);
//         }
//     } else {
//         console.error('No table name specified for data insertion');
//     }
// });

// // Error handling for the serial port
// serialPort.on('error', (err) => {
//     console.error('Serial port error: ', err.message);
// });

// // Endpoint to create a table
// app.post('/create-table', (req, res) => {
//     const tableName = req.body.tableName;
//     currentTableName = tableName; // Set the current table name for data insertion
//     const createTableQuery = `CREATE TABLE ${tableName} (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         tds VARCHAR(255),
//         turbidity VARCHAR(255),
//         date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )`;

//     db.query(createTableQuery, (err, result) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//         } else {
//             console.log('Table created:', tableName);
//             res.json({ tableName: tableName });
//         }
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
require('dotenv').config();

const app = express();
const port = 7000; // Port for the web server

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Serve the HTML file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

// MySQL database connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Replace with your MySQL password
    database: 'water analysis' // Replace with your MySQL database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

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

let currentTableName = '';

// Read data from the serial port
parser.on('data', (data) => {
    console.log(`Received data: ${data}`);

    if (currentTableName) {
        // Assume data is a comma-separated string: "turbidity_value,tds_value"
        try {
            const [turbidity, tds] = data.split(',').map(Number);
            const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Current date and time

            // Insert data into the current table
            const query = `INSERT INTO ${currentTableName} (turbidity, tds, date) VALUES (?, ?, ?)`;
            db.query(query, [turbidity, tds, date], (err, results) => {
                if (err) {
                    console.error('Database insertion error: ', err.message);
                    return;
                }
                console.log('Data inserted into the database');
            });

            // Also insert into real_time_data table
            const realTimeQuery = 'INSERT INTO real_time_data (turbidity, tds, date) VALUES (?, ?, ?)';
            db.query(realTimeQuery, [turbidity, tds, date], (err, results) => {
                if (err) {
                    console.error('Real-time data insertion error: ', err.message);
                    return;
                }
                console.log('Real-time data inserted into the database');
            });
        } catch (err) {
            console.error('Data parsing error: ', err.message);
        }
    } else {
        console.error('No table name specified for data insertion');
    }
});

// Error handling for the serial port
serialPort.on('error', (err) => {
    console.error('Serial port error: ', err.message);
});

// Endpoint to create a table
app.post('/create-table', (req, res) => {
    const tableName = req.body.tableName;
    currentTableName = tableName; // Set the current table name for data insertion
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        tds VARCHAR(255),
        turbidity VARCHAR(255),
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

    db.query(createTableQuery, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            console.log('Table created:', tableName);
            res.json({ tableName: tableName });
        }
    });
});

// Route to handle data request
app.get('/data', (req, res) => {
    const query = `SELECT * FROM ${currentTableName}`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data'); // Handle errors appropriately
        } else {
            res.json(results); // Send data as JSON response
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
