import React from "react";
import { useSelector } from "react-redux";
import CorgiImg from "../../assets/corgi.jpeg";
import "./ConversationListItem.css";

export default function ConversationListItem(props) {
  const username = useSelector((state) => state.user.username);
  const { messages } = props.data;
  const { senderName, receiverName } = messages[0];
  const convName = senderName === username ? receiverName : senderName;
  const lastMessage = messages[messages.length - 1].message;

  return (
    <div
      className={`conversation-list-item ${
        props.selectConvId === props.data.id
          ? "conversation-list-item-selected"
          : ""
      }`}
      onClick={() => props.onSelectConv(props.data.id)}
    >
      <img className="conversation-photo" src={CorgiImg} alt="c" />
      <div className="conversation-info">
        <h1 className="conversation-title">{convName}</h1>
        <p className="conversation-snippet">{lastMessage}</p>
      </div>
    </div>
  );
}
