import axios from "axios";

const API_URL = 'http://192.168.60.108:3001/api/v1';
// const API_URL = 'http://localhost:3001/api/v1'
export const getCategories = async (subject_id) => {
  try {
    const response = await axios.get(`${API_URL}/subject/${subject_id}/categories`)

    return response;
  } catch(error) {
    return error.response;
  }
}

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`)
    
    return response;
  } catch(errors) {
    return errors.response;
  }
}