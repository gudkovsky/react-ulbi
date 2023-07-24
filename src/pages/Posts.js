import React, { useCallback, useEffect, useRef, useState } from "react";
import PostList from "../components/PostList.js";
import PostForm from "../components/PostForm.js";
import Filter from "../components/Filter.js";
import Modal from "../components/UI/modal/Modal.js";
import MyButton from "../components/UI/button/MyButton.js";
import { usePosts } from "../hooks/usePosts.js";
import PostService from "../API/PostService.js";
import Loader from "../components/UI/loader/Loader.js";
import { useFetching } from "../hooks/useFetching.js";
import { getPagesArray, getPagesCount } from "../utils/pages.js";
import Pagination from "../components/UI/pagination/Pagination.js";
import NotFound from "../components/UI/404/NotFound.js";
import { useObserver } from "../hooks/useObserver.js";
import MySelect from "../components/UI/select/MySelect.js";

function Posts() {
  const lastElement = useRef();

  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, fetchError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(
        limit,
        page,
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts([...posts, ...response.data]);
      const totalPosts = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalPosts, limit));
    }
  );

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    //setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const changePage = (page) => {
    setPage(page);
  };

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  return (
    <div className="App">
      <MyButton
        style={{ margin: "20px 0px" }}
        onClick={() => setModal(true)}
      >
        Создать пост
      </MyButton>
      <MyButton onClick={() => fetchPosts(limit, page)}>Запрос</MyButton>
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
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "показать все" },
        ]}
      />
      {fetchError && <NotFound fetchError={fetchError} />}
      {isPostsLoading && <Loader />}

      <PostList
        posts={sortedAndSearchedPosts}
        title={"Список постов"}
        removePost={removePost}
      />
      <div
        ref={lastElement}
        style={{ height: "20px", backgroundColor: "black" }}
      ></div>

      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
        disabled={page === totalPages}
      />
    </div>
  );
}

export default Posts;
