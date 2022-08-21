import React, { useEffect, useState } from "react";
import ConversationList from "../ConversationList";
import MessageList from "../MessageList";
import Toolbar from "../Toolbar";
import { 
  IoIosCog, 
  IoIosAddCircleOutline, 
  IoIosVideocam,
  IoIosCall,
  IoIosInformationCircleOutline,
} from "react-icons/io";
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
        leftItems={[<IoIosCog size={'2em'} color={'blue'}/>]}
        rightItems={[
          <IoIosAddCircleOutline size={'2em'} color={'blue'}/>,
        ]}
      />

      <Toolbar
        // title="Conversation Title"
        rightItems={[
          <IoIosInformationCircleOutline size={'2em'} color={'blue'} />,
          <IoIosVideocam size={'2em'} color={'blue'} />,
          <IoIosCall size={'2em'} color={'blue'} />,
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