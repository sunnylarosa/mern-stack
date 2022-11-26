// This file is where we can make our context and a context provider component.

// We are going to update the local state to keep it in sync with the database. This is using the React Context.
// React context is a way that we can provide kind of global state to many different components in the application.
// And then we can also update that state by dispatching actions from those components as well. A little bit like how redux works and the global state that we're going to be working with is the workouts data.

// Import
// 1. createContext -> let us create a new context that we can then provide to components in our application.
import { createContext, useReducer } from "react";

// Create the context
export const WorkoutsContext = createContext();

// Create workoutsReducer function that will revoke

// Provide the context to our application component tree so that our components can access it.
//   - { children } property represents whatever components or template that the 'WorkoutsContextProvider' context wraps. In this case, then the children is the App component.
export const WorkoutsContextProvider = ({ children }) => {
  // Declare useReducer
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

  // dispatch() function should have 'type' properties to describes the state change, and a 'payload' prop to represents any data we need to make the change.
  // Everything inside the {} parentheses is called as 'action'
  // example -> dispatch({type: 'SET_WORKOUTS', payload: [ { object1 }, { object2 } ] })

  // Return a template, which is our workout context (WorkoutsContext) + .Provider
  return (
    // Whatever parts in this wrap will have access to the context. In this case, we need to wrap the whole application.
    <WorkoutsContext.Provider>
      {/* All components that have access to this global context */}
      {children}
    </WorkoutsContext.Provider>
  );
};
