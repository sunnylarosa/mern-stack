// Import
const express = require("express");
const Workout = require("../models/workoutModel");

// Declare the instance of route so it can be used in this file
const router = express.Router();

// GET All Workouts
router.get("/", (req, res) => {
  res.json({ message: "This is GET All Workouts" });
});

// GET a Single Workout
router.get("/:id", (req, res) => {
  res.json({ message: "This is GET A Single Workout" });
});

// POST a new workout
router.post("/", async (req, res) => {
  // Grab the properties from request body
  const { title, reps, load } = req.body;

  // Add a new document to the workout collection
  try {
    // Create a new workout document
    const workout = await Workout.create({ title, reps, load });

    // Send a response
    res.status(200).json(workout);
  } catch (error) {
    // Return the response that contains error message
    res.status(400).json({ error: error.message });
  }
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a new workout" });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a new workout" });
});

// Export the router
module.exports = router;
