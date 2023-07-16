import React from "react";
import MyButton from "./UI/button/MyButton.js";

export default function Post(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.removePost(props.post)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
}
