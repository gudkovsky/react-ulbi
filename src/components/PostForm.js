import React, { useState } from "react";
import MyButton from "./UI/button/MyButton.js";
import MyInput from "./UI/input/MyInput.js";

export default function PostForm(props) {
  const [post, setPost] = useState({ title: "", body: "" });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };

    props.create(newPost);
    setPost({ title: "", body: "" });
  }

  return (
    <form action="">
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
      />
      <MyInput
        type="text"
        placeholder="Текст поста"
        value={post.body}
        onChange={(e) => {
          setPost({ ...post, body: e.target.value });
        }}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}
