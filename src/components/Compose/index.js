import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postConversationAsync } from "../../features/conversation/conversationSlice";
// import { Box } from "@mui/material";
import "./Compose.css";

export default function Compose(props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submit");
    dispatch(postConversationAsync());
  };
  const onChange = (evt) => {
    setText(evt.target.value);
  };
  return (
    <div className="compose">
      <form onSubmit={handleSubmit} styles={{ minWidth: "100%" }}>
        <input
          type="text"
          value={text}
          className="compose-input"
          placeholder="Type a message, @name"
          onChange={onChange}
        />
      </form>
      {props.rightItems}
    </div>
  );
}
