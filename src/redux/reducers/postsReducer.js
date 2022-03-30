import produce from "immer";

const initialState = {
  posts: [],
  postsLoading: false,
  postsError: null,
  addPostLoading: false,
  addPostError: null,
};

const postsReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case "LOAD_POSTS_REQUESTED":
      state.postsLoading = true;
      break;
    case "LOAD_POSTS_SUCCESS":
      state.postsLoading = false;
      state.posts = action.payload;
      break;
    case "LOAD_POSTS_FAILED":
      state.postsLoading = false;
      state.postsError = action.payload;
      break;
    case "CLEAR_POSTS_ERROR":
      state.postsError = null;
      break;
    case "ADD_POST_REQUESTED":
      state.addPostLoading = true;
      break;
    case "ADD_POST_SUCCESS":
      state.addPostLoading = false;
      state.posts.push(action.payload);
      break;
    case "ADD_POST_FAILED":
      state.addPostLoading = false;
      state.addPostError = action.payload;
      break;
    case "CLEAR_ADD_POST_ERROR":
      state.addPostError = null;
      break;
    default:
      return state;
  }
});

export default postsReducer;
