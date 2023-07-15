import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList.js";
import MyButton from "./components/UI/button/MyButton.js";
import MyInput from "./components/UI/input/MyInput.js";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description 1" },
    { id: 2, title: "Javascript 2", body: "Description 2 " },
    { id: 3, title: "Javascript 3", body: "Description 3" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function addNewPost(e) {
    e.preventDefault();

    const newPost = { id: Date.now(), title: title, body: body };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  }

  return (
    <div className="App">
      <form action="">
        <MyInput
          type="text"
          placeholder="Название поста"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <MyInput
          type="text"
          placeholder="Текст поста"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList
        posts={posts}
        title={"Список постов"}
      />
    </div>
  );
}

export default App;
