import { useEffect } from "react";

// Import components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

// Import contexts
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// React component for Home page
const Home = () => {
  // We no longer need useState because it can only be used locally. We're changing it to useContext that available globally.
  //  - The 'workouts' is null to begin with (refer to the 'state' in WorkoutsContext)
  const { workouts, dispatch } = useWorkoutsContext();

  /* useEffect hook will fires a function and it's going to fire the function when the component is rendered.
     Now we only want to fire it once when it first rendered. We don't want to go out and try to fetch it multiple times everytime the component is rendered.
     As the second argument to the useEffect hook, we pass in an empty array. This is the dependency array, and with it being empty, it will only fire once when the component first rendered.
  */

  useEffect(() => {
    // We try to fetch the workouts from the API on the backend and store it in response.
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");

      // Parse the response variable to JavaScript object so it can be passed into something we can work with. And now we have an array of object (workout object) stored in json variable.
      const json = await response.json();

      // Check if the response is okay or not with ok property
      if (response.ok) {
        // We don't need to update with local state. Instead of, we're using dispatch() function from the invoked useWorkoutsContext
        // We're sending the payload that contains the 'json' data from the server.
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    // Call the function
    fetchWorkouts();
  }, [dispatch]);

  return (
    // Cycle through each of workouts that stored inside "workouts" from useState
    <div className="home">
      <div className="workouts">
        {/* Check if the workouts is not empty. If it's not empty then map the workouts*/}
        {workouts &&
          workouts.map((workout) => (
            // We're using WorkoutDetails to display the detail of each workout. We're also passing the whole workout as a property in the actual WorkoutDetails.
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

// Export
export default Home;
