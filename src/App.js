import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Login from "./features/login/Login";
import Signup from "./features/signup/Signup";
import { routes } from "./router/routes";
import "./App.css";
import { Conversation } from "./features/conversation/Conversation";
import { Button } from "@mui/material";
import { logout } from "./features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <div className="App">
      {location.pathname !== routes.HOME && <Link to={routes.HOME}> Home</Link>}
      {isLoggedIn || <Link to={routes.LOGIN}> Login</Link>}
      {isLoggedIn && location.pathname !== routes.CONVERSATIONS && (
        <Link to={routes.CONVERSATIONS}> Conversations</Link>
      )}
      {isLoggedIn && (
        <Button onClick={() => dispatch(logout())}> Logout </Button>
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
