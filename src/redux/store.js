import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/authSlice';
import commentSlice from './slices/comment/commentSlice';
import postSlice from './slices/post/postSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    comment: commentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
