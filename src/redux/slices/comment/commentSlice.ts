import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../../../types/Comment.interface";

interface CommentState {
  comments: IComment[];
}

const initialState = {
  comments: [],
} as CommentState;

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<IComment[]>) => {
      state.comments = action.payload;
    },
    addComment: (state, action: PayloadAction<IComment>) => {
      state.comments.push(action.payload);
    },
  },
});

export const { setComments, addComment } = commentSlice.actions;

export default commentSlice.reducer;
