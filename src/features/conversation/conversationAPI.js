import axios from "axios";

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
}

export async function searchConversationRequest(public_key) {
  const response = await axios.post(
    `${baseURL}/search`,
    {
      publicKey: public_key,
    },
    { headers }
  );
  return response.data;
}
