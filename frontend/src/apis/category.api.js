import axios from "axios";
import { DEFAULT_API } from "./default.api";

const API_URL = DEFAULT_API;

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