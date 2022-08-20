import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Login from "./features/login/Login";
import Signup from "./features/signup/Signup";
import { routes } from "./router/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to={routes.HOME}> Home</Link>
      <Link to={routes.LOGIN}> Login</Link>
      <Routes>
        <Route
          path={routes.HOME}
          element={
            <div>
              <h1> Home </h1>
              <Counter />
            </div>
          }
        />
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.SIGNUP} element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
