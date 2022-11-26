const { default: mongoose } = require("mongoose");
const Workout = require("../models/workoutModel");

// GET all workouts
const getWorkout = async (req, res) => {
  // find() method is to fetch the data. If we want, for example, fetch the data that has "reps: 20", then we're going to write: find({reps: 20}). We write the condition inside "{}".
  // find() will return array.
  // sort() method is to sort the data. sort({ createAt: -1 }) means that we want to sort by the created date in descending order.
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  // send back a json responce
  res.status(200).json(workouts);
};

// GET a single workout
const getWorkoutSingle = async (req, res) => {
  // all the route parameters are stored on a "params" property
  const { id } = req.params;

  // Make sure if { id } is a valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  // Check the workout exist
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  // If the workout exist, return a response with status 200 and send back as json the workout
  res.status(200).json(workout);
};

// POST or Create new workout
const createWorkout = async (req, res) => {
  // Grab the properties from request body
  const { title, reps, load } = req.body;

  // Check if the field is empty
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }

  // Check if the emptyFields array if empty (length=0) or not (length>1)
  if (emptyFields.length > 0) {
    // Don't go any further or even try to add the document to the database.
    // We just gonna send an error back to the client and say which field are missing.
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

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
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  // Check if the { id } is a valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such ID" });
  }

  // findOneAndDelete() accept object parameter. We're using id as our parameter. But in mongodb, it's not just "id", it is "_id" property.
  const workout = await Workout.findOneAndDelete({ _id: id });

  // Check the workout exist
  if (!workout) {
    return res.status(400).json({ error: "No such ID" });
  }

  // If the workout exist, return a response with status 200 and send back as json the workout
  res.status(200).json(workout);
};

// UPDATE a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  // Check if the { id } is a valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such ID" });
  }

  // findOneAndUpdate() method accept 2 arguments.
  //  The first one is we define the criteria. Here the first parameter is we want to basing it on the ID.
  //  The second argument is an object which represents the updates or the new data that we want to make.
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  // ...req.body
  //   - When we send a patch request, we're going to send a new data to that request, much like what we did for a post request.
  //     That data is stored inside req.body and that's why we put req.body in the second argument.
  //   - the "..." is called the spread operator, is a shorthand for iterating over either arrays, plain objects, or arguments of a function for doing a shallow copy.

  // Check the workout exist
  if (!workout) {
    return res.status(400).json({ error: "No such ID" });
  }

  // If the workout exist, return a response with status 200 and send back as json the workout that was just updated
  res.status(200).json(workout);
};

// Export this
module.exports = {
  getWorkout,
  getWorkoutSingle,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
