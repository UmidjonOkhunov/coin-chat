// A mock function to mimic making an async request for data
export function getConversationsRequest(userId, username) {
  console.log("getConversationsRequest", userId, username);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: "amount" }), 500)
  );
}
