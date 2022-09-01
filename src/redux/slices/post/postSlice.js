import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  popularPosts: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post._id === action.payload
      );
      state.posts[index] = action.payload;
    },
  },
});

export const getPosts = (state) => state.posts;

export const { setPosts, addPost, deletePost, updatePost } = postSlice.actions;

export default postSlice.reducer;
