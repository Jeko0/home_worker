import axios from "axios";

// const API_URL = 'http://localhost:3001/api/v1/tasks';
const API_URL = 'http://192.168.60.108:3001/api/v1/tasks'

export const createTask = async (task) => {
  try{
    const response = await axios.post(`${API_URL}`, {task: task})
    return response;
  }catch(errors){
    return errors.response;
  }

}