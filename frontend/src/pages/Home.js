import { useEffect, useState } from "react";

// React component for Home page
const Home = () => {
  // Declare local state (will be use in (response.ok))
  const [workouts, setWorkouts] = useState(null);

  /* useEffect hook will fires a function and it's going to fire the function when the component is rendered.
     Now we only want to fire it once when it first rendered. We don't want to go out and try to fetch it multiple times everytime the component is rendered.
     As the second argument to the useEffect hook, we pass in an empty array. This is the dependency array, and with it being empty, it will only fire once when the component first rendered.
  */

  useEffect(() => {
    // We try to fetch the workouts from the API on the backend and store it in response.
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");

      // Parse the response variable to JavaScript object so it can be passed into something we can work with. And now we have an array of object (workout object) stored in json variable.
      const json = await response.json();

      // Check if the response is okay or not with ok property
      if (response.ok) {
        // In here, we're going to update some local states. First create that local above (the setWorkouts)
        // After that, this function (setWorkouts) will update the "workouts" variable in useState.
        setWorkouts(json);
      }
    };

    // Call the function
    fetchWorkouts();
  }, []);

  return (
    // Cycle through each of workouts that stored inside "workouts" from useState
    <div className="home">
      <div className="workouts">
        {/* Check if the workouts is not empty. If it's not empty then map the workouts*/}
        {workouts &&
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
};

// Export
export default Home;
