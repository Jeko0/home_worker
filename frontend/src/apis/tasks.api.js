import axios from "axios";
import { DEFAULT_API } from "./default.api";
const API_URL = DEFAULT_API + '/tasks';


export const createTask = async (task, token) => {
  try{
    const response = await axios.post(`${API_URL}`, {task: task,},  {
      headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
      }
  })
    return response;
  }catch(errors){
    return errors.response;
  }

}


export const getTasks = async (token) => {
  try{
    const response = await axios.get(`${API_URL}`, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    return response;
  }catch(errors){
    return errors.response;
  }
} 

export const getTask = async (task_id, token) => {
  try{
    const response = axios.get(`${API_URL}/${task_id}`, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    return response;
  }catch(error){
    return error.response;
  }
}