import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Login from "./features/login/Login";
import { routes } from "./router/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to={routes.HOME}> Home</Link>
      <Link to={routes.LOGIN}> Login</Link>
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
          path="/about"
          element={
            <div>
              <h1> About </h1>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
