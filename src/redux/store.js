import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    // post: postSlice,
    // comment: commentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
