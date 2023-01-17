import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../../types/Post.interface";

interface PostState {
  posts: IPost[];
  popularPosts: IPost[];
}

const initialState = {
  posts: [],
  popularPosts: [],
} as PostState;

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    setPopularPosts: (state, action: PayloadAction<IPost[]>) => {
      state.popularPosts = action.payload;
    },
    addPost: (state, action: PayloadAction<IPost>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<string>) => {
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

export const getPosts = (state: PostState) => state.posts;

export const { setPosts, addPost, deletePost, updatePost, setPopularPosts } =
  postSlice.actions;

export default postSlice.reducer;
