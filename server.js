const express = require('express');
const session = require('express-session');
const app = express();

// ALlwork here

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));
const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose'); // Import mongoose

// Connection URL and database name
const url = 'mongodb+srv://muhib:muhib123@cluster0.ebfhofi.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'webScrapingDB';

const routes = require('./route');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);


// Allow requests from a specific origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://giant-seal-beret.cyclic.app/questions');
  next();
});

const connectDB = async () => {
  try {
    await mongoose.connect(url); // Use the 'url' variable for connection
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.log('Database Error:', error);
    process.exit(1); // Terminate the process if the database connection fails
  }
};

// Call connectDB function to establish the database connection
connectDB();

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
