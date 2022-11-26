// Destructure from the props
const WorkoutDetails = ({ workout }) => {
  const handleClick = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });

    // The 'response' that we get here have the json data of a deleted document.
    // Now we store that deleted documen inside this 'json' variable.

    const json = await response.json();

    // Check if the response is ok. Because if it's not ok, then we don't want then to start deleting things from our global context state.
    if (response.ok) {
      // Calling dispatch function from WorkoutsContext
    }
  };

  // Return a template
  return (
    <div className="workout-details">
      {/* Display Title */}
      <h4>{workout.title}</h4>

      {/* Display Load */}
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>

      {/* Display Reps */}
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>

      {/* Display Created Date */}
      <p>{workout.createdAt}</p>

      {/* Delete button */}
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

// Export
export default WorkoutDetails;
