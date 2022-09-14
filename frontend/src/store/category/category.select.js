import { createSelector } from "@reduxjs/toolkit";

export const selectCategoriesReducer = (state) => state.categories.categories

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories
)