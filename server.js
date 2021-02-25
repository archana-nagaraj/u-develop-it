//  import express at the top of the file
const express = require('express');  
// import sqlite3 package
const sqlite3 = require('sqlite3').verbose();

// Add the PORT designation and the app expression
const PORT = process.env.PORT || 3001; 
const app = express();

// Add Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the election database.');
  });

// // Test the Express.js cnnection by creating a GET route ( TEST route )
// app.get('/', (req, res) => {
// res.json({
//     message: 'Hello World'
// });
// });


// Default response for any other request(Not Found) Catch all . Place this at the very bottom of all routes.
app.use((req, res) => {
    res.status(404).end();
  });




// function that will start the Express.js server on port 3001 // Place it at the bottom of the server.js file

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });