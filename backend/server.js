// This is kind of like the entry file for the backend application.
// It's where we're going to register the Express app.

// Use .env
require("dotenv").config();

// Import
const express = require("express");
const workoutRoutes = require("./routes/workout");

// Declare
const app = express();

// Middleware
//  - In order to access request.body object
app.use(express.json);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// Connect to db

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
