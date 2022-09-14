import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  access_token: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    case USER_ACTION_TYPES.SET_ACCESS_TOKEN:
      return {
        ...state,
        access_token: payload,
      }
    default:
      return state;
  }
}