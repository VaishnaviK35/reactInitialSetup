import { createSlice } from "@reduxjs/toolkit";
import { authSliceType } from "../../types";

const initialState: authSliceType = {
  login: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginStatus: (state) => {
      state.login = !state.login;
    },
  },
});

export default authSlice.reducer;

export const { setLoginStatus } = authSlice.actions;
