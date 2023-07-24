import React from "react";
import MyButton from "./UI/button/MyButton.js";
import { useNavigate } from "react-router-dom";

export default function Post(props) {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton
          onClick={() => {
            navigate(`/posts/${props.post.id}`, { replace: true });
          }}
        >
          Открыть
        </MyButton>
        <MyButton onClick={() => props.removePost(props.post)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
}
