import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Features/Posts/PostSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
