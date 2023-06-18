import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  // initial state for the reducer
  initialState: {
    // initiliaze
    user: null,
  },
  // reducers are functions that take the current state and an action object as arguments, and return a new state
  reducers: {
    // login function is used to update the user object in the redux store when the user logs in //
    login: (state, action) => {
      // set the user object in the redux store to the user object
      state.user = action.payload
    },
    // logout function is used to update the user object in the redux store when the user logs out //
    logout: (state) => {
      // remove the user object and token from local storage
      // set the user object in the redux store to null
      state.user = null
    },
    // updateUser function is used to update the user object in the redux store when the user updates their first name or last name //
    updateUser: (state, action) => {
      // parse the user object from a string to an object
      const user = state.user
      // update the user object with the new first name and last name
      user.firstName = action.payload.firstName
      user.lastName = action.payload.lastName
      // if the user is logged in, set the user object in local storage to the updated user object
      // set the user object in the redux store to the updated user object
      state.user = user
    },
  },
})

export const { login, logout, updateUser } = userSlice.actions // export the login, logout, and updateUser functions

export const selectUser = (state) => state.user.user // export the user object from the redux store

export default userSlice.reducer // export the userSlice reducer to be used in the redux store
