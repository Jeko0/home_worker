import axios from "axios";

const API_URL = 'http://localhost:3001/api/v1/users'

export const getCurrentUser = async () => {
  const response = await axios.get(`${API_URL}/2/profile`);
  return response;
}