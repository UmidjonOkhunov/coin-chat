import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectConv,
} from "./conversationSlice";
import styles from "./Conversation.module.css";
import { routes } from "../../router/routes";
import { useNavigate } from "react-router-dom";

export function Conversation() {
  const count = useSelector(selectConv);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.loggedIn);

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate(routes.HOME);
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <h1> Conversations</h1>
    </div>
  );
}
