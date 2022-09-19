import axios from "axios";
import { DEFAULT_API } from "./default.api";

const API_URL = DEFAULT_API;

export const getSubjects = async () => {
  try {
    const response = await axios.get(API_URL);

    return response;
  } catch(errors) {
    return errors.response;
  }
}