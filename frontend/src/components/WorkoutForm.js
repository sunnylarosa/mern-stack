// Import
import { useState } from "react";

const WorkoutForm = () => {
  // These states going to update the state of correspond input field
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  // Function
  const handleSubmit = async (e) => {
    // Prevent the default action of form being submitted
    e.preventDefault();

    // This is a dummy workout object that going to be send as the body of the request
    const workout = { title, load, reps };

    // Use fetch API to send a post request
    const response = await fetch("/api/workout", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // We're getting back the 'response' from the POST request, turn it to json, and now store it inside 'json'.
    const json = await response.json();

    // Check if the 'response' is ok or not (error)
    if (!response.ok) {
      // True, the response is not ok -> update the state of error and show error property
      setError(json.error);
    }

    // The response is ok
    if (response.ok) {
      // reset the form so the field is empty when we want to input another value
      setTitle("");
      setLoad("");
      setReps("");

      // formsetError null in case there was one previously
      setError(null);

      // And console log some message and output the 'json'.
      console.log("New workout added", json);
    }
  };

  return (
    <form class="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      {/* Title field */}
      <label
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      >
        Exercise Title:
      </label>

      {/* Load field */}
      <label
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      >
        Load (in Kg):
      </label>

      {/* Reps field */}
      <label
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      >
        Reps:
      </label>

      <button>Add Workout</button>
    </form>
  );
};

// Export
export default WorkoutForm;
