import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './loginUser';
import { registerUser } from './registerUser';

const initialState = {
  user: null,
  token: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.status = null;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.status = 'pending';
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [registerUser.pending]: (state, action) => {
      state.status = action.payload.message;
    },
    [loginUser.pending]: (state) => {
      state.status = 'pending';
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [loginUser.pending]: (state, action) => {
      state.status = action.payload.message;
    },
  },
});

export const checkIsAuth = (state) => !!state.auth.token;

export const { logout } = authSlice.actions;

export default authSlice.reducer;
