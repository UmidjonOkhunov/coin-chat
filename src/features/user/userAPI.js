import axios from "axios";

const baseURL = "http://10.200.89.52:8080";
const headers = { "Access-Control-Allow-Origin": ["*"] };

export async function signupRequest(public_key, username, password) {
  const response = await axios.post(
    `${baseURL}/signup`,
    {
      name: username,
      publicKey: public_key,
      password: password,
    },
    { headers }
  );
  
  return response.data;
}

export async function loginRequest(username, password) {
  const response = await axios.post(
    `${baseURL}/login`,
    {
      name: username,
      password: password,
    },
    { headers }
  );

  return response.data;
}
