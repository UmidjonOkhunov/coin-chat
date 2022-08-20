// A mock function to mimic making an async request for data
export function login(username, password) {
  return new Promise((resolve) => {
    console.log("login request", username, password);
    setTimeout(() => resolve({ data: username }), 500);
  });
}
