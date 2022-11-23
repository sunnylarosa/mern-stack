const Workout = require("../models/workoutModel");

// GET all workouts
const getWorkout = async (req, res) => {
  // find() method is to fetch the data. If we want, for example, fetch the data that has "reps: 20", then we're going to write: find({reps: 20}). We write the condition inside "{}".
  // find() will return array.
  // sort() method is to sort the data. sort({ createAt: -1 }) means that we want to sort by the created date in descending order.
  //   const workouts = await Workout.find({}).sort({ createdAt: -1 });

  //   send back a json responce
  //   res.status(200).json(workouts);
  return res.status(200).json({ message: "Hello" });
};

// GET a single workout
const getWorkoutSingle = async (req, res) => {
  // all the route parameters are stored on a "params" property
  const { id } = req.params;

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json;
};

// POST or Create new workout
const createWorkout = async (req, res) => {
  // Grab the properties from request body
  const { title, reps, load } = req.body;

  // Add a new document to the workout collection / database
  try {
    // Create a new workout document
    const workout = await Workout.create({ title, reps, load });

    // Send a response
    res.status(200).json(workout);
  } catch (error) {
    // Return the response that contains error message
    res.status(400).json({ error: error.message });
  }
};

// DELETE a workout

// UPDATE a workout

// Export this
module.exports = {
  getWorkout,
  getWorkoutSingle,
  createWorkout,
};
