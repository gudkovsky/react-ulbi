import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList.js";
import PostForm from "./components/PostForm.js";
import MySelect from "./components/UI/select/MySelect.js";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      body: "мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.",
    },
    {
      id: 2,
      title: "Python",
      body: "Python — высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ.",
    },
    {
      id: 3,
      title: "Golang",
      body: "Go — компилируемый многопоточный язык программирования, разработанный внутри компании Google. Разработка Go началась в сентябре 2007 года, его непосредственным проектированием занимались Роберт Гризмер, Роб Пайк и Кен Томпсон, занимавшиеся до этого проектом разработки операционной системы Inferno. ",
    },
  ]);

  const [sorting, setSorting] = useState("");

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  // 1:10
  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSorting(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <MySelect
        // value={sorting}
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        onChange={sortPosts}
      />

      {posts.length ? (
        <PostList
          posts={posts}
          title={"Список постов"}
          removePost={removePost}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Постов не найдено!</h1>
      )}
    </div>
  );
}

export default App;
