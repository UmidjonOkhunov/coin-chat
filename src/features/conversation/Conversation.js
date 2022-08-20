import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectConversations,
  getConversationsAsync,
} from "./conversationSlice";
import { routes } from "../../router/routes";
import { useNavigate } from "react-router-dom";
import Messenger from "../../components/Messenger";

export function Conversation() {
  const conversations = useSelector(selectConversations);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.loggedIn);

  useEffect(() => {
    dispatch(getConversationsAsync());
  }, [dispatch]);

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate(routes.HOME);
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <Messenger />
    </div>
  );
}
