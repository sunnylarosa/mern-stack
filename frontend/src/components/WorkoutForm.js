// Import
import { useState } from "react";

// Import context
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  // We only gonna use dispatch() function here. So, just destructure the dispatch().
  const { dispatch } = useWorkoutsContext();

  // These states going to update the state of correspond input field
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  // Function
  const handleSubmit = async (e) => {
    // Prevent the default action of form being submitted
    e.preventDefault();

    // This is a dummy workout object that going to be send as the body of the request
    const workout = { title, load, reps };

    // Use fetch API to send a post request
    const response = await fetch("/api/workouts", {
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
      // Beside the error message, we also have an array of empty fields property being send back stored in json. So, we're gonna tackle it with useState emptyFields
      setError(json.error); // this is for error message
      setEmptyFields(json.emptyFields); // this is for an array of empty fields
    }

    // The response is ok
    if (response.ok) {
      // reset the form so the field is empty when we want to input another value
      setTitle("");
      setLoad("");
      setReps("");

      // formsetError null in case there was one previously
      setError(null);

      // reset setEmptyFields to empty array
      setEmptyFields([]);

      // And console log some message and output the 'json'.
      console.log("New workout added", json);

      // Update / display the new object in home page using dispatch() function.
      dispatch({ type: "CREATE_WORKOUTS", payload: json });
    }
  };

  return (
    <form class="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      {/* Title field */}
      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      {/* Load field */}
      <label>Load (in Kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
      />

      {/* Reps field */}
      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? "error" : ""}
      />

      <button>Add Workout</button>

      {/* Output the message error ('error' state) so we can see here if there is an error */}
      {error && <div className="error">{error}</div>}
    </form>
  );
};

// Export
export default WorkoutForm;
