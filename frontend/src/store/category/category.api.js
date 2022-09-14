import axios from "axios";

const API_URL = 'http://192.168.60.108:3001/api/v1';

export const getCategories = async (subject_id) => {
  try {
    const response = await axios.get(`${API_URL}/subjects_categories`, {
      subject_id: subject_id,
    })

    return response;
  } catch(error) {
    return error.response;
  }
}