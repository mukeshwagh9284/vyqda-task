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
