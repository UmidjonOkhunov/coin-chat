import axios from "axios";
import { conversations as conversationDb } from "./dummyData";

const baseURL = "http://10.200.89.52:8080";
const headers = { "Access-Control-Allow-Origin": "*" };

// A mock function to mimic making an async request for data
export async function getConversationsRequest(userId, username) {
  console.log(userId, username);
  const response = await axios.post(
    `${baseURL}/messages`,
    {
      name: username,
      id: userId,
    },
    { headers }
  );

  return response.data.message;
  // return new Promise((resolve) =>
  //   resolve({ conversations: conversationDb.slice().reverse() })
  // );
}

export async function postConversationRequest(
  userId,
  username,
  receiverName,
  receiverId,
  message
) {
  // Save the message in the server

  const response = await axios.post(
    `${baseURL}/newmessage`,
    {
      senderName: username,
      senderId: userId,
      receiverName,
      receiverId,
      message,
    },
    { headers }
  );
  return response.data.message;

  // Dummy
  // const maxId = conversationDb.reduce((mid, conv) => Math.max(mid, conv.id), 0);

  // const conversation = {
  //   id: maxId + 1,
  //   senderId: userId,
  //   senderName: username,
  //   receiverName: receiverName,
  //   receiverId: receiverId,
  //   message: message,
  //   createdAt: new Date().getTime(),
  // };
  // console.log("add", conversation);
  // return new Promise((resolve) =>
  //   resolve({
  //     conversations: conversationDb.concat([conversation]).reverse(),
  //   })
  // );
}
