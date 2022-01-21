import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuth: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    checkLogin(state) {
      const authName = localStorage.getItem("auth");

      if (authName) {
        state.isAuth = authName;
      }
    },

    login(state, action) {
      state.isAuth = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("auth", action.payload);
    },
    logout(state) {
      state.isAuth = null;
      state.isLoggedIn = false;
      localStorage.removeItem("auth");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
