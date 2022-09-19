import axios from "axios";
import { DEFAULT_API } from "./default.api";

const API_URL = DEFAULT_API;

export const getAllWritersInfos = async () => {
  try {
    const response = await axios.get(`${API_URL}/writers_info`)
    return response;
  } catch(errors) {
    return errors.response;
  }
}

export const getUserWritersInfos = async (user_id) => {
  try {
    const response = await axios.get(`${API_URL}/users/${user_id}/writers_infos`)
    return response;
  }catch(errors) {
    return errors.response;
  }
}