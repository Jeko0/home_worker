import axios from "axios";

const API_URL = 'http://192.168.60.108:3001/api/v1/users'

export const getAllUser = async () => {
  const response = await axios.get(`${API_URL}/all_user`);
  return response;
}

export const signInUser = async ({email, password}) => {
  const response = await axios.post(`${API_URL}/sessions`, {
    user: {
      email: email,
      password: password
    } 
  });
  return response;
}

export const signUpUser= async (user) => {
  const response = await axios.post(`${API_URL}/registrations`, {
    user: user
  })
  return response;
} 