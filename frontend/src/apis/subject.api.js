import axios from "axios";

// const API_URL = 'http://localhost:3001/api/v1';
const API_URL = 'http://192.168.60.108:3001/api/v1'

export const getSubjects = async () => {
  try {
    const response = await axios.get(API_URL);

    return response;
  } catch(errors) {
    return errors.response;
  }
}