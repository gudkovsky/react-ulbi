import React, { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching.js";
import PostService from "../API/PostService.js";
import Loader from "./UI/loader/Loader.js";

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchById, loading, error] = useFetching(async (id) => {
    const response = await PostService.getPostById(
      id,
      "https://jsonplaceholder.typicode.com/posts/"
    );
    setPost(response.data);
  });

  const [fetchComments, loadingComments, errorComments] = useFetching(
    async (id) => {
      const response = await PostService.getCommentstById(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchById(params.postId);
    fetchComments(params.postId);
  }, []);
  return (
    <div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="post-page">
            <div>Вы открыли страницу поста с Id : {params.postId}</div>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-body">{post.body}</div>
            {loadingComments ? (
              <Loader />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {comments.map((el) => (
                  <div key={el.id}>
                    <h5>{el.email}</h5>
                    <div>{el.body}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
