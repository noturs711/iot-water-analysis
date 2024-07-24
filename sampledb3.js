// const express = require('express');
// const mysql = require('mysql2');
// const path = require('path');
// const bodyParser = require('body-parser');
// const { SerialPort } = require('serialport');
// const { ReadlineParser } = require('@serialport/parser-readline');
// require('dotenv').config();

// const app = express();
// const port = 3000; // Port for the web server

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());

// // Serve the HTML file at the root URL
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index3.html'));
// });

// // MySQL database connection setup
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '', // Replace with your MySQL password
//     database: 'water analysis' // Replace with your MySQL database name
// });

// // Connect to the database
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//     } else {
//         console.log('Connected to the database');
//     }
// });

// // Endpoint to fetch all tables in the database
// app.get('/tables', (req, res) => {
//     const showTablesQuery = 'SHOW TABLES';
//     db.query(showTablesQuery, (err, results) => {
//         if (err) {
//             console.error('Error fetching tables:', err);
//             res.status(500).send('Error fetching tables');
//         } else {
//             const tables = results.map((result) => result[`Tables_in_${db.config.database}`]);
//             res.json(tables);
//         }
//     });
// });

// // Endpoint to fetch data from a specific table
// app.get('/data/:tableName', (req, res) => {
//     const tableName = req.params.tableName;
//     const selectQuery = `SELECT * FROM ${tableName}`;
//     db.query(selectQuery, (err, results) => {
//         if (err) {
//             console.error(`Error fetching data from table ${tableName}:`, err);
//             res.status(500).send(`Error fetching data from table ${tableName}`);
//         } else {
//             res.json(results);
//         }
//     });
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

//             // Insert data into the current table
//             const query = `INSERT INTO ${currentTableName} (turbidity, tds, date) VALUES (?, ?, ?)`;
//             db.query(query, [turbidity, tds, date], (err, results) => {
//                 if (err) {
//                     console.error('Database insertion error: ', err.message);
//                     return;
//                 }
//                 console.log('Data inserted into the database');
//             });

//             // Also insert into real_time_data table
//             const realTimeQuery = 'INSERT INTO real_time_data (turbidity, tds, date) VALUES (?, ?, ?)';
//             db.query(realTimeQuery, [turbidity, tds, date], (err, results) => {
//                 if (err) {
//                     console.error('Real-time data insertion error: ', err.message);
//                     return;
//                 }
//                 console.log('Real-time data inserted into the database');
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

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000; // Port for the web server

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Serve the HTML file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index3.html'));
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

// Endpoint to fetch all tables in the database
app.get('/tables', (req, res) => {
    const showTablesQuery = 'SHOW TABLES';
    db.query(showTablesQuery, (err, results) => {
        if (err) {
            console.error('Error fetching tables:', err);
            res.status(500).send('Error fetching tables');
        } else {
            const tables = results.map((result) => result[`Tables_in_${db.config.database}`]);
            res.json(tables);
        }
    });
});

// Endpoint to fetch data from a specific table
app.get('/data/:tableName', (req, res) => {
    const tableName = req.params.tableName;
    const selectQuery = `SELECT * FROM ${tableName}`;
    db.query(selectQuery, (err, results) => {
        if (err) {
            console.error(`Error fetching data from table ${tableName}:`, err);
            res.status(500).send(`Error fetching data from table ${tableName}`);
        } else {
            res.json(results);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
