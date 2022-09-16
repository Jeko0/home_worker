import axios from "axios";

const API_URL = 'http://192.168.60.108:3001/api/v1'

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