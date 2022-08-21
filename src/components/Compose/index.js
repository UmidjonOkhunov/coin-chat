import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postConversationAsync } from "../../features/conversation/conversationSlice";
import "./Compose.css";

export default function Compose(props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { userId, username } = useSelector((state) => state.user);

  const { receiverId, receiverName } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submit", userId, username, receiverId, receiverName, text);
    try {
      dispatch(
        postConversationAsync({
          userId,
          username,
          receiverId,
          receiverName,
          message: text,
        })
      );
      setText("");
    } catch (err) {
      console.log(err);
    }
  };
  const onChange = (evt) => {
    setText(evt.target.value);
  };
  return (
    <div className="compose">
      <form
        onSubmit={handleSubmit}
        styles={{ minWidth: "100%" }}
        className="compose"
      >
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
