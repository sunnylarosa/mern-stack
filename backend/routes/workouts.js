// Import
const express = require("express");
const {
  getWorkout,
  getWorkoutSingle,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// Declare the instance of route so it can be used in this file
const router = express.Router();

// GET All Workouts
router.get("/", getWorkout);

// GET a Single Workout
router.get("/:id", getWorkoutSingle);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

// Export the router
module.exports = router;
