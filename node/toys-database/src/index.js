const logger = require("winston");
const mysql = require("mysql");
const express = require("express");

// Ensure environment variables are loaded
require("dotenv").config();

logger.info("Starting Demonstration App for MySQL Woo!");

// Connect to database
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const app = express();
app.use(express.static("public"));
const port = process.env.PORT || 3000;

app.get("/toys", (req, res) => {
  pool.query("SELECT * FROM toy", (error, results, fields) => {
    if (error) {
      res.status(500);
      res.send(error);
      return;
    }

    res.send(results);
  });
});

app.listen(port, () => console.log(`Toys Service Listening on ${port}`));

// connection.end();
