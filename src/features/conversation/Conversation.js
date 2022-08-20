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

export function Conversation() {
  const count = useSelector(selectConv);
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Conversations</h1>
    </div>
  );
}
