const mysql = require("mysql2");

// Create a MySQL connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mukesh@9284",
  database: "notes",
  port: 3306,
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
