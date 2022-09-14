import createAction from '../../utils/reducer/reducer.utils';
import { SUBJECTS_ACTION_TYPES } from './subject.types';

export const setSubjects = (subjects) =>
  createAction(SUBJECTS_ACTION_TYPES.SET_ALL_SUBJECTS, subjects);