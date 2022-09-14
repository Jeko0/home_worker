import { SUBJECTS_ACTION_TYPES } from "./subject.types";

const INITIAL_STATE = {
  subjects: [],
}

export const subjectsReducer = (state = INITIAL_STATE, action = {}) => {
  const {type, payload} = action;

  switch(type){
    case SUBJECTS_ACTION_TYPES.SET_ALL_SUBJECTS:
      return {
        ...state,
        subjects: payload,
      }
    default:
      return state;
  }
}