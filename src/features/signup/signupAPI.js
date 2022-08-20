// A mock function to mimic making an async request for data
export function signup(public_key, username, password) {
  return new Promise((resolve) => {
    console.log("sign up request", public_key, username, password);
    setTimeout(() => resolve({ data: username }), 500);
  });
}
