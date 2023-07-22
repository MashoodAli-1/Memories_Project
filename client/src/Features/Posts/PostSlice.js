import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const { data } = await api.fetchPosts();
  return data;
});
export const createPost = createAsyncThunk("post/createPost", async (post) => {
  const { data } = await api.createPost(post);
  return data;
});

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {},
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { addPost } = PostSlice.actions;
export default PostSlice.reducer;
