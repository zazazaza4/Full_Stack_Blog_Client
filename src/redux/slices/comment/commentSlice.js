import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.posts = action.payload;
    },
    addComment: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { setComments, addComment } = commentSlice.actions;

export default commentSlice.reducer;
