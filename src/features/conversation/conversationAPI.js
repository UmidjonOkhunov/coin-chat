import { conversations as conversationDb } from "./dummyData";

// A mock function to mimic making an async request for data
export function getConversationsRequest(userId, username) {
  return new Promise((resolve) =>
    resolve({ conversations: conversationDb.slice().reverse() })
  );
}
