// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/Notes")
//   .then(() => {
//     console.log("Successfully connected to database");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// app.use(express.json());
// app.use(cors());
// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// const userRouter = require("./router");
// app.use("/user", userRouter);

// app.listen(8080, () => {
//   console.log("server running");
// });

// const express = require("express");
// const router = express.Router();
// const mysql = require("mysql2");
// const cors = require("cors");
// const app = express();
// app.use(express.json());
// app.use(cors());

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "Mukesh@9284", // Replace with your MySQL password
//   database: "Notes",
//   port: 3306, // Default MySQL port
// });

// // Test connection
// db.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error connecting to MySQL:", err.message);
//     return;
//   }
//   console.log("Successfully connected to MySQL database.");
//   connection.release();
// });

// app.get("/", (req, res) => {
//   res.send("Hello from MySQL-backed API");
// });

// // User router
// const userRouter = require("./router");
// app.use("/user", userRouter);

// // Start the server
// app.listen(8080, () => {
//   console.log("Server running on http://localhost:8080");
// });

const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./router");

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("Hello from MySQL-backed API");
});

// User routes
app.use("/user", userRouter);

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
