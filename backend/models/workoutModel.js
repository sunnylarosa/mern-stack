// Import
const mongoose = require("mongoose");

// Create function to create Schema
const Schema = mongoose.Schema;

// Initialize schema for workout data
const workoutSchema = new Schema(
  {
    // Define the schema
    title: {
      // Define this "title" property
      type: String,
      required: true,
    },
    reps: {
      // Define this "reps" property
      type: Number,
      required: true,
    },
    load: {
      // Define this "load" property
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
