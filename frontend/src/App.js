import { BrowserRouter, Routes, Route } from "react-router-dom";

// BroserRouter: wraps everywhere we want to use router
// Routes: wraps all of our individual routes
// Route: the individual route component to create a single route

// Pages & Components
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* BrowserRouter going to surrounds everything that ever needss to use the routing system */}
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
