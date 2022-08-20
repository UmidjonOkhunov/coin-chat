import React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Login from "./features/login/Login";
import Signup from "./features/signup/Signup";
import { routes } from "./router/routes";
import "./App.css";
import { Conversation } from "./features/conversation/Conversation";
import Header from "./features/header/Header";

function App() {
  return (
    <div className="App">
      <Header />

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
