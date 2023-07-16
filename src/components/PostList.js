import React from "react";
import Post from "./Post.js";

export default function PostList({ posts, title, removePost }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <Post
          number={index + 1}
          post={post}
          key={post.id}
          removePost={removePost}
        />
      ))}
    </div>
  );
}
