import { createSelector } from "@reduxjs/toolkit";

const selectSubjectsReducer = (state) => state.subjects.subjects;

export const selectSubjects = createSelector(
  [selectSubjectsReducer],
  (subjects) => subjects
)
