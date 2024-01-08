// express web server mwe

// import express
const express = require('express');

// create express app
const app = express();

// set port
const port = 3000;

// use static folder
app.use(express.static('public'));

//start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
