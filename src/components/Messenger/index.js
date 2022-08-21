import React, { useEffect, useState } from "react";
import ConversationList from "../ConversationList";
import MessageList from "../MessageList";
import "./Messenger.css";

export default function Messenger({ conversations }) {
  const [selectConvId, setSelectConvId] = useState(0);

  useEffect(() => {
    const lastConv = conversations.length > 0 ? conversations[0]?.id : 0;
    setSelectConvId(lastConv);
  }, [conversations]);

  const onSelectConv = (id) => {
    setSelectConvId(id);
  };

  const messages =
    conversations.find((conv) => conv.id === selectConvId)?.messages || [];

  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList
          conversations={conversations}
          selectConvId={selectConvId}
          onSelectConv={onSelectConv}
        />
      </div>

      <div className="scrollable content">
        <MessageList messages={messages} />
      </div>
    </div>
  );
}
