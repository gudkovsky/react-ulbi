import React from "react";
import Post from "./Post.js";

import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function PostList({ posts, title, removePost, error }) {
  if (!error && !posts.length) {
    return <h1 style={{ textAlign: "center" }}>Постов не найдено!</h1>;
  }

  return (
    <div>
      {!error && <h1 style={{ textAlign: "center" }}>{title}</h1>}
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <Post
              number={post.id}
              post={post}
              removePost={removePost}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
