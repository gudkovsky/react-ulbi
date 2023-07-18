import React from "react";
import MyButton from "../button/MyButton.js";
import { getPagesArray } from "../../../utils/pages.js";

export default function Pagination({ totalPages, page, changePage }) {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
        justifyContent: "center",
        columnGap: "10px",
      }}
    >
      {pagesArray.map((p) => (
        <MyButton
          key={p}
          className={p === page ? "page current-page" : "page"}
          onClick={() => changePage(p)}
        >
          {p}
        </MyButton>
      ))}
    </div>
  );
}
