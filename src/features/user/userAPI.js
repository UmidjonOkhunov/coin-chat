import axios from "axios";
import Authentication from "../auth/auth";

const baseURL = "http://10.200.89.52:8080";

export async function signupRequest(public_key, username, password) {
  console.log("signup request");

  const response = await axios.post(`${baseURL}/signup`, {
    name: username,
    publicKey: public_key,
    password: password,
  });
  return { id: response.data.id };
}

export async function authKey(public_key) {
  const auth = await Authentication(public_key);

  if (!auth) {
    throw new Error("Invalid public key");
  }

  console.log(auth);
  return { address: auth };
}

export async function loginRequest(username, password) {
  const response = await axios.post(`${baseURL}/login`, {
    name: username,
    password: password,
  });

  console.log(response.data);
  return { id: response.data.id };
  // return { id: 1 };
}
