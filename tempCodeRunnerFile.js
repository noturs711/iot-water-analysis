const { ReadlineParser } = require('@serialport/parser-readline');
const express = require('express');
const { SerialPort } = require('serialport');
const app = express();
const port = 3000; // Port for the web server

// Replace 'COM8' with your actual port address
const portAddress = 'COM8';

// Create a new serial port instance
const serialPort =new SerialPort({
  path: portAddress,
  baudRate: 115200, // Updated baud rate
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false
});

// Create a new parser instance
const parser = serialport.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// Open the serial port
serialport.on('open', () => {
  console.log(`Serial port ${portAddress} opened`);
});

// Read data from the serial port
parser.on('data', (data) => {
  console.log(`Received data: ${data}`);
});

// Error handling for the serial port
serialport.on('error', (err) => {
  console.error('Error: ', err.message);
});

// Simple web server to serve data
app.get('/', (req, res) => {
  res.send('Hello from Node.js server!');
});

app.listen(port, () => {
  console.log(`Web server listening at http://localhost:${port}`);
});
