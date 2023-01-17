import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../types/User.interface";
import { RootState } from "../../store";

interface AuthState {
  user: null | IUser;
  token: null | string;
  status: string;
}

const initialState = {
  user: null,
  token: null,
  status: "idle",
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.status = "idle";
    },
    logIn: (state, action) => {
      state.status = action.payload.message;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    },
  },
});

export const checkIsAuth = (state: RootState) => Boolean(state.auth.token);

export const { logOut, logIn } = authSlice.actions;

export default authSlice.reducer;
