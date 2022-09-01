import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.status = null;
    },
    logIn: (state, action) => {
      state.status = action.payload.message;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    },
  },
});

export const checkIsAuth = (state) => !!state.auth.token;

export const { logout, logIn } = authSlice.actions;

export default authSlice.reducer;
