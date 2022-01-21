import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import settingsSlice from "./settings";

const store = configureStore({
  reducer: { auth: authSlice.reducer, settings: settingsSlice.reducer },
});

export default store;
