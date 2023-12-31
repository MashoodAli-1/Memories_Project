import React from "react";
import Post from "./Post/post.js";
import useStyles from "./style.js";
import { Grid, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
const theme = createTheme();
const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <>
      <Grid
        className={classes.mainContainer}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
