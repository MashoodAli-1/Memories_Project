import useStyles from "./styles";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useEffect } from "react";
import { getPosts } from "./Features/Posts/PostSlice";

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
            <img
              className={classes.image}
              src={memories}
              alt="memory logo"
              height={60}
            />
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems={"stretch"}
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
