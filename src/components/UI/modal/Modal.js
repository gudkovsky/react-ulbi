import React, { useState } from "react";
import ReactDom from "react-dom";
import cl from "./Modal.module.css";

export default function Modal({ children, modal, onClose }) {
  return (
    modal &&
    ReactDom.createPortal(
      <div className={cl.myModal}>
        <div
          className={cl.overlay}
          onClick={onClose}
        ></div>
        <div className={cl.myModalContent}>{children}</div>
        <button
          className={cl.closeButton}
          onClick={onClose}
        >
          +
        </button>
      </div>,
      document.getElementById("portal")
    )
  );
}
