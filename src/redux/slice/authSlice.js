import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("user");
const email = localStorage.getItem("email");
const isLoggedIn = localStorage.getItem("isLoggedIn");
const isAdmin = localStorage.getItem("isAdmin");

//const token

const initialState = {
  isLoggedIn: isLoggedIn ? true : false,
  email: email ? email : "",
  user: user ? JSON.parse(user) : null,
  admin: isAdmin ? true : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    REGISTER_USER_BEGIN: (state, action) => {
      console.log(action.payload);
      const { email } = action.payload;
      state.email = email;
      localStorage.setItem("email", email);
    },
    REGISTER_USER_SUCCESS: (state, action) => {
      console.log(action.payload);
      //localStorage.setItem("user", JSON.stringify(data.user));
    },
    REGISTER_USER_ERROR: (state, action) => {
      console.log(action.payload);
    },
    LOGGED_IN_USER: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
    },
    LOGOUT_USER: (state, action) => {
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", false);
    },
    UPDATE_USER_BEGIN: (state, action) => {
      console.log(action.payload);
    },
    UPDATE_USER_SUCCESS: (state, action) => {
      console.log(action.payload);
      const { name, email } = action.payload;
      console.log("User State =>", JSON.parse(user));
    },
  },
});

export const {
  REMOVE_USER_LOCAL_STORAGE,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGGED_IN_USER,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
} = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsAdmin = (state) => state.auth.admin;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectEmail = (state) => state.auth.email;

export default authSlice.reducer;
