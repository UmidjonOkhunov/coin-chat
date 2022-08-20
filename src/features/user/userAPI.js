export function signupRequest(public_key, username, password) {
  return new Promise((resolve) => {
    console.log("sign up request", public_key, username, password);
    setTimeout(() => resolve({ data: username }), 500);
  });
}

export function loginRequest(username, password) {
  console.log("loginRequest", username, password);
  return new Promise((resolve) => {
    console.log("login request", username, password);
    setTimeout(() => resolve({ data: username }), 500);
  });
}
