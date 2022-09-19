import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.select";
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