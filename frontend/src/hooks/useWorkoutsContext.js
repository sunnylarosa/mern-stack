// This file is for consuming the WorkoutsContext by using useContext hook.
// So that every time we want to use our workouts data, we just going to invoke this useWorkoutsContext hook and get that context value back.

// Import
//  1. The actual context
import { WorkoutsContext } from "../context/WorkoutsContext";

//  2. The useContext to consume the context
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  // This hook will return the value of WorkoutsContext, which is the value that we passed into the provider component (the value props)

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
