import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const dispatch = useDispatch();
  const { postsLoading, posts, postsError, addPostLoading, addPostError } =
    useSelector((state) => state);

  useEffect(() => {
    dispatch({
      type: "LOAD_POSTS_REQUESTED",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const post = Object.fromEntries(formData.entries());
    console.log(post);
    dispatch({
      type: "ADD_POST_REQUESTED",
      payload: post,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <input type="text" name="author" />
        <button>Add</button>
      </form>

      <hr />
      <div> {addPostLoading && <div>Loading...</div>}</div>
      {addPostError && (
        <div>
          {" "}
          {addPostError}{" "}
          <span onClick={() => dispatch({ type: "CLEAR_ADD_POST_ERROR" })}>
            X
          </span>
        </div>
      )}

      <hr />

      <div> {postsLoading && <div>Loading...</div>}</div>
      {postsError && (
        <div>
          {" "}
          {postsError}{" "}
          <span onClick={() => dispatch({ type: "CLEAR_POSTS_ERROR" })}>X</span>
        </div>
      )}
      {posts.map((post) => (
        <div>
          <div>{post.id} </div>
          <div style={{ color: "red" }}>{post.title} </div>
          <div>{post.author}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Blog;
