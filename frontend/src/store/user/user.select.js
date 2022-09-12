import { createSelector } from "@reduxjs/toolkit"

const selectCurrentUserReducer = (state) => state.user.currentUser 
const selectAccessTokenReducer = (state) => state.user.access_token

export const selectCurrentUser = createSelector(
  [selectCurrentUserReducer],
  (currentUser) => {
  return currentUser ? currentUser : null
  }
);

export const selectAccessToken = createSelector(
  [selectAccessTokenReducer],
  (access_token) => access_token
)
  