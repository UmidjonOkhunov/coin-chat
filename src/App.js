import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="/"> Home</Link>
      <Link to="/about"> About</Link>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1> Home </h1>
              <Counter />
            </div>
          }
        />
        <Route
          path="about"
          element={
            <div>
              <h1> About </h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
