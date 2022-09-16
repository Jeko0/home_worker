import { CATEGORIES_ACTION_TYPES } from './category.types';

const INITIAL_STATE = {
  categories: [],
}

export const categoriesReducer = (state = INITIAL_STATE, action= {}) => {
  const {type, payload} = action;
  console.log('payload:', payload)
  switch(type){
    case CATEGORIES_ACTION_TYPES.SET_ALL_CATEGORIES:
      return {
        ...state,
        categories: payload,
      }
    default:
      return state;
  }
} 