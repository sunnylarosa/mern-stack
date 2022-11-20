// Import
const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ message: "POST a new workout" });
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
