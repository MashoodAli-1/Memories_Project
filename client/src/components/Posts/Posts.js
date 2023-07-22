import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./style.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
const theme = createTheme();
const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>Posts</div>
        <Post />
      </ThemeProvider>
    </>
  );
};

export default Posts;
