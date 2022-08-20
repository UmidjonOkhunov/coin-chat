import { conversations as conversationDb } from "./dummyData";

// A mock function to mimic making an async request for data
export function getConversationsRequest(userId, username) {
  return new Promise((resolve) =>
    resolve({ conversations: conversationDb.slice().reverse() })
  );
}

export function postConversation(
  userId,
  username,
  receipientName,
  receipientId,
  message
) {
  // Save the message in the server

  // Dummy
  const maxId = conversationDb.reduce((mid, conv) => Math.max(mid, conv.id), 0);
  const conversation = {
    id: maxId + 1,
    senderId: userId,
    senderName: username,
    receipientName: receipientName,
    receipientId: receipientId,
    message: message,
    createdAt: new Date().getTime(),
  };

  return new Promise((resolve) =>
    resolve({
      conversations: conversationDb.slice().concat([conversation]).reverse(),
    })
  );
}
