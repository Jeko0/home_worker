import axios from "axios";

const API_URL = 'http://192.168.60.108:3001/api/v1/users'
// const API_URL = 'http://localhost:3001/api/v1/users'

export const getAllUser = async () => {
  const response = await axios.get(`${API_URL}/all_user`);
  return response;
}

export const signInUser = async ({email, password}) => {
  try {
    const response = await axios.post(`${API_URL}/sessions`, {
      user: {
        email: email,
        password: password
      } 
    });
    return response;
  } catch(errors) {
    return errors.response;
  }
  
}

export const signUpUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/registrations`, {
      user: user
    })
    return response;
  } catch(errors) {
    return errors.response;
  }
} 


export const getUserProfile = async (user_id) => {
  try{
    const response = await axios.get(`${API_URL}/${user_id}/profile`);
    return response;
  } catch(errors){
    return errors.response;
  }
}