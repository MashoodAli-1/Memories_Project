import React, { useEffect, useState } from "react";
import useStyles from "./style.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField, Paper, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearForm,
  createPost,
  updatePost,
} from "../../Features/Posts/PostSlice.js";
import FileBase from "react-file-base64";
const theme = createTheme();

const Form = () => {
  const dispatch = useDispatch();
  const { formValues } = useSelector((state) => state.posts);
  const classes = useStyles(theme);
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues._id) {
      console.log(`update req = ${formValues._id},${postData}`);
      dispatch(updatePost(postData));
      Clear();
    } else {
      console.log(`affected by update ${formValues._id}`);
      dispatch(createPost(postData));
      Clear();
    }
  };
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const Clear = () => {
    dispatch(
      clearForm({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
      })
    );
  };
  useEffect(() => {
    setPostData(formValues);
  }, [formValues]);
  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Creating a Memory</Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={handleChange}
          />
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={handleChange}
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={handleChange}
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={handleChange}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={`${classes.root} ${classes.buttonSubmit}`}
            variant="contained"
            color="primary"
            size="small"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={Clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </ThemeProvider>
  );
};

export default Form;
