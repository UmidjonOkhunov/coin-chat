import React, { useEffect, useState } from "react";
import ConversationList from "../ConversationList";
import MessageList from "../MessageList";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";
import "./Messenger.css";

export default function Messenger({ conversations }) {
  const [selectConvId, setSelectConvId] = useState(0);

  useEffect(() => {
    const lastConv = conversations[0]?.id || 0;
    setSelectConvId(lastConv);
  }, [conversations]);

  const onSelectConv = (id) => {
    setSelectConvId(id);
  };

  const messages =
    conversations.find((conv) => conv.id === selectConvId)?.messages || [];

  return (
    <div className="messenger">
      <Toolbar
        title="Messenger"
        leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />,
        ]}
      />

      <Toolbar
        title="Conversation Title"
        rightItems={[
          <ToolbarButton
            key="info"
            icon="ion-ios-information-circle-outline"
          />,
          <ToolbarButton key="video" icon="ion-ios-videocam" />,
          <ToolbarButton key="phone" icon="ion-ios-call" />,
        ]}
      />

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
