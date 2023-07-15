import React from "react";
import classes from "./MyButton.module.css";

export default function MyButton({ children, ...props }) {
  console.log(classes);
  return (
    <button
      className={classes.myButton}
      {...props}
    >
      {children}
    </button>
  );
}
