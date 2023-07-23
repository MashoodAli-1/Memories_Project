import axios from "axios";

const url = "http://localhost:4000/post";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (post) => axios.patch(`${url}/${post._id}`, post);
