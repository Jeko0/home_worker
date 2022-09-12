import { createSelector } from "@reduxjs/toolkit"

const selectCurrentUserReducer = (state) => state.user.currentUser 


export const selectCurrentUser = createSelector(
  [selectCurrentUserReducer],
  (currentUser) => {
  return currentUser ? currentUser.email : 'no'
  }
);

  