import React from "react";
import ConversationSearch from "../ConversationSearch";
import ConversationListItem from "../ConversationListItem";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";

import "./ConversationList.css";

export default function ConversationList({
  conversations,
  selectConvId,
  onSelectConv,
}) {
  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />,
        ]}
      />
      <ConversationSearch />
      {conversations.map((conversation) => (
        <ConversationListItem
          key={conversation.id}
          data={conversation}
          selectConvId={selectConvId}
          onSelectConv={onSelectConv}
        />
      ))}
    </div>
  );
}
