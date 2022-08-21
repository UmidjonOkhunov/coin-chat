import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  // selectConversations,
  getConversationsAsync,
} from "./conversationSlice";
import { routes } from "../../router/routes";
import { useNavigate } from "react-router-dom";
import Messenger from "../../components/Messenger";

export function Conversation() {
  const conversations = useSelector(
    (state) => state.conversation.conversations
  );
  // const conversations = useSelector(selectConversations);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const isLoggedIn = userState.loggedIn;
  const onSearch = useSelector((state) => state.conversation.onSearch);

  useEffect(() => {
    // try {
    //   dispatch(
    //     getConversationsAsync({
    //       userId: userState.userId,
    //       username: userState.username,
    //     })
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
    const id = setInterval(() => {
      try {
        if (onSearch) return;
        dispatch(
          getConversationsAsync({
            userId: userState.userId,
            username: userState.username,
          })
        );
      } catch (err) {
        console.log(err);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [dispatch, userState.userId, userState.username, onSearch]);

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate(routes.HOME);
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <Messenger conversations={conversations} />
    </div>
  );
}
