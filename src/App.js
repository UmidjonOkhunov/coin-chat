import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Login from "./features/login/Login";
import Signup from "./features/signup/Signup";
import { routes } from "./router/routes";
import "./App.css";
import { Conversation } from "./features/conversation/Conversation";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== routes.HOME && <Link to={routes.HOME}> Home</Link>}
      <Link to={routes.LOGIN}> Login</Link>
      {location.pathname !== routes.CONVERSATIONS && (
        <Link to={routes.CONVERSATIONS}> Conversations</Link>
      )}
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
        <Route path={routes.CONVERSATIONS} element={<Conversation />} />
      </Routes>
    </div>
  );
}

export default App;
