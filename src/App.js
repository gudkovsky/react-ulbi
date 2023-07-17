import React, { useState, useMemo } from "react";
import "./styles/App.css";
import PostList from "./components/PostList.js";
import PostForm from "./components/PostForm.js";
import Filter from "./components/Filter.js";
import Modal from "./components/UI/modal/Modal.js";
import MyButton from "./components/UI/button/MyButton.js";
import { usePosts } from "./hooks/usePosts.js";

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

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    //setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  return (
    <div className="App">
      <MyButton
        style={{ margin: "20px 0px" }}
        onClick={() => setModal(true)}
      >
        Создать пост
      </MyButton>
      <Modal
        modal={modal}
        onClose={() => setModal(false)}
      >
        <PostForm
          create={createPost}
          onClose={() => setModal(false)}
        />
      </Modal>
      <Filter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList
        posts={sortedAndSearchedPosts}
        title={"Список постов"}
        removePost={removePost}
      />
    </div>
  );
}

export default App;
