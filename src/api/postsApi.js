import axios from "axios";

export const fetchPosts = () => {
  return axios({
    method: "GET",
    url: "http://localhost:3000/posts",
  }).then((res) => res.data);
};

export const addPost = (post) => {
  return axios({
    method: "POST",
    url: "http://localhost:3000/posts",
    data: post,
  }).then((res) => res.data);
};
