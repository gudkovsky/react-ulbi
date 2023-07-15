import React from "react";

export default function Post(props) {
  console.log(props);

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <button className="post__btn">Удалить</button>
      </div>
    </div>
  );
}
