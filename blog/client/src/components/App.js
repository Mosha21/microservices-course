import React from "react";
import PostCreate from "./posts/PostCreate";
import PostList from "./posts/PostList";

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
