import React from "react";
import "./ConversationSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { searchConversationAsync } from "../../features/conversation/conversationSlice";

export default function ConversationSearch() {
  const dispatch = useDispatch();
  const [key, setKey] = React.useState("");
  const { username, userId } = useSelector((state) => state.user);

  const handleSearch = (evt) => {
    evt.preventDefault();

    try {
      dispatch(
        searchConversationAsync({
          public_key: key,
          userId,
          username,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="conversation-search">
      <form onSubmit={handleSearch} className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
          value={key}
          onChange={(evt) => setKey(evt.target.value)}
        />
      </form>
    </div>
  );
}
