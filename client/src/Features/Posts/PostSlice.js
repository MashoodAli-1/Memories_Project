import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";

const initialState = {
  posts: [],
  formValues: {},
};

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const { data } = await api.fetchPosts();
  return data;
});
export const createPost = createAsyncThunk("post/createPost", async (post) => {
  const { data } = await api.createPost(post);
  return data;
});
export const updatePost = createAsyncThunk("post/updatePost", async (post) => {
  console.log(`post creator = ${post.creator}`);
  const { data } = await api.updatePost(post);
  return data;
});

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPostToForm: (state, { payload }) => {
      state.formValues = payload;
    },
    clearForm: (state, { payload }) => {
      state.formValues = payload;
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    [updatePost.fulfilled]: (state, action) => {
      console.log(`creator = ${action.payload.creator}`);
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
  },
});

export const { addPostToForm, clearForm } = PostSlice.actions;
export default PostSlice.reducer;
