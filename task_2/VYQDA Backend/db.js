const mysql = require("mysql2");

// Create a MySQL connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mukesh@9284", // Replace with your MySQL password
  database: "notes", // Replace with your database name
  port: 3306, // Default MySQL port
});

// Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    return;
  }
  console.log("Successfully connected to MySQL database.");
  connection.release();
});

module.exports = db;
